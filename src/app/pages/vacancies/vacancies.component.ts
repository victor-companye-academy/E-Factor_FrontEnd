import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { Search } from 'src/app/core/interfaces/search';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';
import { formatText } from 'src/app/core/utils/formatText';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent {

  constructor(private vacancyService: VacancyService) { }

  protected readonly rows: number = 10;
  protected toShow: boolean = true;
  protected visible: boolean = false;
  protected card?: Vacancy;

  protected vacancy: Array<Vacancy> = this.vacancyService.listVacancies()
  protected vacancySearch: Array<Vacancy> = this.vacancy;

  protected first: number = 0;
  protected totalRecords: number = this.vacancySearch.length || 0
  private searchObj: Search | undefined;

  protected setSearch(event: Search) {
    this.first = 0

    if (this.validSearch(event)) {
      this.searchObj = event;
      this.vacancySearch = this.applySearch(this.vacancy, event);
      this.totalRecords = this.vacancySearch.length;

      this.vacancySearch = this.pagination(this.vacancySearch)

    } else {
      this.searchObj = undefined
      this.vacancySearch = this.setList()
    }
    this.toShow = this.isEmptylist(this.vacancySearch)
  }

  private setList(event?: Search): Array<Vacancy> {

    if (!event) {
      if (this.validSearch(this.searchObj)) {

        this.vacancySearch = this.applySearch(this.vacancy, this.searchObj!);
        this.vacancySearch = this.pagination(this.vacancySearch)

        return this.vacancySearch
      }
      else {
        this.vacancySearch = this.pagination(this.vacancy);

        this.totalRecords = this.vacancy.length;

        return this.vacancySearch;
      }
    }
    this.vacancySearch = this.pagination(this.applySearch(this.vacancy, event));

    return this.vacancySearch;
  }

  private isEmptylist(list: Array<Vacancy>): boolean {
    return list.length ? true : false
  }

  private applySearch(list: Array<Vacancy>, search: Search): Array<Vacancy> {
    let newArray: Array<Vacancy> = this.vacancy;
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

  private searchBySkill(list: Array<Vacancy>, search: string): Array<Vacancy> {
    const newList = list
      .filter(card => card.skills
        .map(skill => skill.toLowerCase())
        .includes(formatText(search.toLowerCase())));
    return newList;
  }

  private searchByPosition(list: Array<Vacancy>, search: string): Array<Vacancy> {
    const newList: Array<Vacancy> = list.filter(card => formatText(card.serniority.toLowerCase()) === formatText(search.toLowerCase()))
    return newList
  }

  private pagination(list: Array<Vacancy>): Array<Vacancy> {
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

  protected showDialog(card: Vacancy) {
    this.card = card
    this.visible = true;
  }
}
