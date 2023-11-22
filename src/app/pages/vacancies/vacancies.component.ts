import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { CardVacancy } from 'src/app/core/interfaces/card-vacancy';
import { Search } from 'src/app/core/interfaces/search';
import { CardVacancyService } from 'src/app/core/service/cardVacancy/card-vacancy.service';
import { formatText } from 'src/app/core/utils/formatText';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent {
  protected readonly rows: number = 10;
  protected toShow: boolean = true;

  protected cardVacancy: Array<CardVacancy> = this.cardVacancyService.listVacancies()
  protected cardVacancySearch: Array<CardVacancy> = this.cardVacancy;

  protected first: number = 0;
  protected totalRecords: number = this.cardVacancySearch.length || 0
  private searchObj: Search | undefined;

  constructor(private cardVacancyService: CardVacancyService) { }

  protected setSearch(event: Search) {
    this.first = 0

    if (this.validSearch(event)) {
      this.searchObj = event;
      this.cardVacancySearch = this.applySearch(this.cardVacancy, event);
      this.totalRecords = this.cardVacancySearch.length;

      this.cardVacancySearch = this.pagination(this.cardVacancySearch)

    } else {
      this.searchObj = undefined
      this.cardVacancySearch = this.setList()
    }
    this.toShow = this.isEmptylist(this.cardVacancySearch)
  }

  private setList(event?: Search): Array<CardVacancy> {

    if (!event) {
      if (this.validSearch(this.searchObj)) {

        this.cardVacancySearch = this.applySearch(this.cardVacancy, this.searchObj!);
        this.cardVacancySearch = this.pagination(this.cardVacancySearch)

        return this.cardVacancySearch
      }
      else {
        this.cardVacancySearch = this.pagination(this.cardVacancy);

        this.totalRecords = this.cardVacancy.length;

        return this.cardVacancySearch;
      }
    }
    this.cardVacancySearch = this.pagination(this.applySearch(this.cardVacancy, event));

    return this.cardVacancySearch;
  }

  private isEmptylist(list: Array<CardVacancy>): boolean {
    return list.length ? true : false
  }

  private applySearch(list: Array<CardVacancy>, search: Search): Array<CardVacancy> {
    let newArray: Array<CardVacancy> = this.cardVacancy;
    if (search) {
      for (const key in search) {
        if (search.hasOwnProperty(key)) {
          const searchKey = key as keyof Search;

          if (typeof search[searchKey] === 'boolean' && search[searchKey]) {
            switch (searchKey) {
              case 'angular':
                newArray = this.searchBySkill(newArray, searchKey)
                break;

              case 'html':
                newArray = this.searchBySkill(newArray, searchKey)
                break;

              case 'javascript':
                newArray = this.searchBySkill(newArray, searchKey)
                break;

              case 'typescript':
                newArray = this.searchBySkill(newArray, searchKey)
                break;

              case 'estagio':
                newArray = this.searchByPosition(newArray, searchKey)
                break;

              case 'junior':
                newArray = this.searchByPosition(newArray, searchKey)
                break;

              case 'pleno':
                newArray = this.searchByPosition(newArray, searchKey)
                break;

              case 'senior':
                newArray = this.searchByPosition(newArray, searchKey)
                break;
            }
          }
          else if (typeof search[searchKey] === 'string' && search[searchKey]) {
            switch (searchKey) {
              case 'otherPosition':
                newArray = this.searchByPosition(newArray, search[searchKey])
                break;
              case 'otherSkill':
                newArray = this.searchBySkill(newArray, search[searchKey])
                break;
            }
          }
        }
      }
    }
    this.toShow = this.isEmptylist(newArray)
    return newArray;
  }

  private validSearch(search?: Search): boolean {
    if (!search) {
      return false
    }

    let isTrue: boolean = false;

    for (const key in search) {
      if (search.hasOwnProperty(key)) {
        const searchKey = key as keyof Search;

        if (search[searchKey]) {
          isTrue = true
        }

        if (typeof search[searchKey] === 'string' && isTrue && (isTrue || search.otherPosition.trim() !== '' || search.otherSkill.trim() !== '')) {
          isTrue = true;
        }
      }
    }
    return isTrue;
  }

  private searchBySkill(list: Array<CardVacancy>, search: string): Array<CardVacancy> {
    const newList = list
      .filter(card => card.skills
        .map(skill => skill.toLowerCase())
        .includes(formatText(search.toLowerCase())));
    return newList;
  }

  private searchByPosition(list: Array<CardVacancy>, search: string): Array<CardVacancy> {
    const newList: Array<CardVacancy> = list.filter(card => formatText(card.position.toLowerCase()) === formatText(search.toLowerCase()))
    return newList
  }

  private pagination(list: Array<CardVacancy>): Array<CardVacancy> {
    const newList = list.slice(this.first, (this.rows + this.first))
    return newList;
  }

  protected onPageChange(event: PaginatorState) {
    window.scrollTo(0, 120);
    if (event.first !== undefined) {
      this.first = event.first;
    }
    this.setList()
  }
}
