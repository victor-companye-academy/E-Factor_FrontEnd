
import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { ProfessionalInfo } from 'src/app/core/interfaces/professional-info';
import { Search } from 'src/app/core/interfaces/search';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';
import { formatText } from 'src/app/core/utils/formatText';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent {

  constructor(private professionalService: ProfessionalService) { }


  protected readonly rows: number = 10;
  protected toShow: boolean = true;
  protected visible: boolean = false;

  protected professional: Array<ProfessionalInfo> = this.professionalService.listProfessionals()
  protected professionalSearch: Array<ProfessionalInfo> = this.professional;

  protected first: number = 0;
  protected totalRecords: number = this.professionalSearch.length || 0
  private searchObj: Search | undefined;

  protected isLogged: boolean = false;
  protected isBlockNonloggedModalOpen: boolean = false;

  //

  openNonLoggedModal() {
    this.isBlockNonloggedModalOpen = true;
  }

  closeNonLoggedModal() {
    this.isBlockNonloggedModalOpen = false;
  }

  protected setSearch(event: Search) {
    this.first = 0

    if (this.validSearch(event)) {
      this.searchObj = event;
      this.professionalSearch = this.applySearch(this.professional, event);
      this.totalRecords = this.professionalSearch.length;

      this.professionalSearch = this.pagination(this.professionalSearch)

    } else {
      this.searchObj = undefined
      this.professionalSearch = this.setList()
    }
    this.toShow = this.isEmptylist(this.professionalSearch)
  }

  private setList(event?: Search): Array<ProfessionalInfo> {

    if (!event) {
      if (this.validSearch(this.searchObj)) {

        this.professionalSearch = this.applySearch(this.professional, this.searchObj!);
        this.professionalSearch = this.pagination(this.professionalSearch)

        return this.professionalSearch
      }
      else {
        this.professionalSearch = this.pagination(this.professional);

        this.totalRecords = this.professional.length;

        return this.professionalSearch;
      }
    }
    this.professionalSearch = this.pagination(this.applySearch(this.professional, event));

    return this.professionalSearch;
  }

  private isEmptylist(list: Array<ProfessionalInfo>): boolean {
    return list.length ? true : false
  }

  private applySearch(list: Array<ProfessionalInfo>, search: Search): Array<ProfessionalInfo> {
    let newArray: Array<ProfessionalInfo> = this.professional;
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

  private searchBySkill(list: Array<ProfessionalInfo>, search: string): Array<ProfessionalInfo> {
    const newList = list
      .filter(card => card.skills
        .map(skill => skill.toLowerCase())
        .includes(formatText(search.toLowerCase())));
    return newList;
  }

  private searchByPosition(list: Array<ProfessionalInfo>, search: string): Array<ProfessionalInfo> {
    const newList: Array<ProfessionalInfo> = list.filter(card => formatText(card.seniority.toLowerCase()) === formatText(search.toLowerCase()))
    return newList
  }

  private pagination(list: Array<ProfessionalInfo>): Array<ProfessionalInfo> {
    const newList = list.slice(this.first, (this.rows + this.first))
    return newList;
  }

  protected showDialog() {
    this.visible = true;
  }

  // protected modal(id: string):void{
  //   if(!this.isLogged){
  //     return this.openNonLoggedModal();
  //   }
  //   const element = document.querySelector('[about-vacancy]');
  // }

  protected onPageChange(event: PaginatorState) {
    window.scrollTo(0, 120);

    if (event.first !== undefined) {
      this.first = event.first;
    }
    this.setList()
  }
}