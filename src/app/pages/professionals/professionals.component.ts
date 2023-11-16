
import { Component } from '@angular/core';
import { CardProfessional } from 'src/app/core/interfaces/card-professional';
import { CardProfessionalService } from 'src/app/core/service/cardProfessional/card-professional.service';

interface PaginatorState {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

interface Search {
  otherSkill: string;
  otherPosition: string;

  angular: boolean;
  html: boolean;
  javascript: boolean;
  junior: boolean;
  pleno: boolean;
  estagio: boolean;
  senior: boolean;
  typescript: boolean
}

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent {

  protected readonly rows: number = 4;

  protected cardProfessional: Array<CardProfessional> = this.cardProfessionalService.listProfessionals();
  protected cardProfessionalSearch: Array<CardProfessional> = this.cardProfessional;

  protected first: number = 0;
  protected totalRecords: number = this.cardProfessionalSearch.length || 0
  private searchObj: Search | undefined;

  constructor(private cardProfessionalService: CardProfessionalService) { }

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

  private applySearch(list: Array<CardProfessional>, search: Search): Array<CardProfessional> {
    if (search) {

      // 
      for (const key in search) {
        if (search.hasOwnProperty(key)) {
          const searchKey = key as keyof Search;
          if (search[searchKey]) {
            console.log(`nome: ${searchKey}, valor: ${search[searchKey]}`)
          }
        }
      }

      // 

      if (!this.validSearch(search)) {
        return this.cardProfessionalSearch;
      }
      if (search.otherPosition && search.otherSkill) {
        return this.searchGroup(list, search)
      }
      if (search.otherPosition) {
        return this.searchByPosition(list, search)
      }
      if (search.otherSkill) {
        return this.searchBySkill(list, search)
      }
    }
    return this.cardProfessionalSearch;
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

  private searchGroup(list: Array<CardProfessional>, obj: Search) {
    const newListByPosition: Array<CardProfessional> = this.searchByPosition(list, obj);
    const newList: Array<CardProfessional> = this.searchBySkill(newListByPosition, obj);
    return newList;
  }

  private searchBySkill(list: Array<CardProfessional>, obj: Search): Array<CardProfessional> {
    const newList = list
      .filter(card => card.skills
        .map(skill => skill.toLocaleUpperCase())
        .includes(obj.otherSkill.toLocaleUpperCase()));
    return newList;
  }

  private searchByPosition(list: Array<CardProfessional>, obj: Search): Array<CardProfessional> {
    const newList: Array<CardProfessional> = list.filter(card => card.title.toLocaleUpperCase() == obj.otherPosition.toLocaleUpperCase())
    return newList;
  }

  private pagination(list: Array<CardProfessional>): Array<CardProfessional> {
    const newList = list.slice(this.first, (this.rows + this.first))
    return newList;
  }

  protected onPageChange(event: PaginatorState) {
    if (event.first !== undefined) {
      this.first = event.first;
    }
    this.setList()
  }
}