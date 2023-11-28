
import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { CardProfessional } from 'src/app/core/interfaces/card-professional';
import { Search } from 'src/app/core/interfaces/search';
import { CardProfessionalService } from 'src/app/core/service/professional/professional.service';
import { formatText } from 'src/app/core/utils/formatText';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent {

  constructor(private cardProfessionalService: CardProfessionalService) { }


  protected readonly rows: number = 10;
  protected toShow: boolean = true;
  protected visible: boolean = false;

  protected cardProfessional: Array<CardProfessional> = this.cardProfessionalService.listProfessionals()
  protected cardProfessionalSearch: Array<CardProfessional> = this.cardProfessional;

  protected first: number = 0;
  protected totalRecords: number = this.cardProfessionalSearch.length || 0
  private searchObj: Search | undefined;

  protected setSearch(event: Search) {
    this.first = 0

    if (this.validSearch(event)) {
      this.searchObj = event;
      this.cardProfessionalSearch = this.applySearch(this.cardProfessional, event);
      this.totalRecords = this.cardProfessionalSearch.length;

      this.cardProfessionalSearch = this.pagination(this.cardProfessionalSearch)

    } else {
      this.searchObj = undefined
      this.cardProfessionalSearch = this.setList()
    }
    this.toShow = this.isEmptylist(this.cardProfessionalSearch)
  }

  private setList(event?: Search): Array<CardProfessional> {

    if (!event) {
      if (this.validSearch(this.searchObj)) {

        this.cardProfessionalSearch = this.applySearch(this.cardProfessional, this.searchObj!);
        this.cardProfessionalSearch = this.pagination(this.cardProfessionalSearch)

        return this.cardProfessionalSearch
      }
      else {
        this.cardProfessionalSearch = this.pagination(this.cardProfessional);

        this.totalRecords = this.cardProfessional.length;

        return this.cardProfessionalSearch;
      }
    }
    this.cardProfessionalSearch = this.pagination(this.applySearch(this.cardProfessional, event));

    return this.cardProfessionalSearch;
  }

  private isEmptylist(list: Array<CardProfessional>): boolean {
    return list.length ? true : false
  }

  private applySearch(list: Array<CardProfessional>, search: Search): Array<CardProfessional> {
    let newArray: Array<CardProfessional> = this.cardProfessional;
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

  private searchBySkill(list: Array<CardProfessional>, search: string): Array<CardProfessional> {
    const newList = list
      .filter(card => card.skills
        .map(skill => skill.toLowerCase())
        .includes(formatText(search.toLowerCase())));
    return newList;
  }

  private searchByPosition(list: Array<CardProfessional>, search: string): Array<CardProfessional> {
    const newList: Array<CardProfessional> = list.filter(card => formatText(card.title.toLowerCase()) === formatText(search.toLowerCase()))
    return newList
  }

  private pagination(list: Array<CardProfessional>): Array<CardProfessional> {
    const newList = list.slice(this.first, (this.rows + this.first))
    return newList;
  }

  protected showDialog() {
    this.visible = true;
  }

  protected modal(id: number):void{
    const element = document.querySelector('[about-vacancy]');

    
  }

  protected onPageChange(event: PaginatorState) {
    window.scrollTo(0, 120);

    if (event.first !== undefined) {
      this.first = event.first;
    }
    this.setList()
  }
}