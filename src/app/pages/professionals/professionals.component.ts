
import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { ProfessionalCard } from 'src/app/core/interfaces/professional-card';
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
  protected toShow: boolean = false;
  protected visible: boolean = false;

  protected professional!: Array<ProfessionalCard>;
  protected professionalSearch: Array<ProfessionalCard> = this.professional;

  protected first: number = 0;
  protected totalRecords: number = (this.professionalSearch && this.professionalSearch.length) || 0;
  private searchObj: Search | undefined;

  //

  protected async setSearch(event: Search) {
    await this.initializeProfessionalsList();

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

  private setList(event?: Search): Array<ProfessionalCard> {

    if (!event) {
      if (this.validSearch(this.searchObj)) {

        this.professionalSearch = this.applySearch(this.professional, this.searchObj!);
        this.professionalSearch = this.pagination(this.professionalSearch)

        return this.professionalSearch
      }
      else {
        this.professionalSearch = this.pagination(this.professional);

        if (this.professional) {
          this.totalRecords = this.professional.length;
        } else {
          this.totalRecords = 0;
        }

        return this.professionalSearch;
      }
    }
    this.professionalSearch = this.pagination(this.applySearch(this.professional, event));

    return this.professionalSearch;
  }

  private isEmptylist(list: Array<ProfessionalCard>): boolean {
    return list && list.length ? true : false && list.length > 0
  }

  private applySearch(list: Array<ProfessionalCard>, search: Search): Array<ProfessionalCard> {
    let newArray: Array<ProfessionalCard> = this.professional;
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

  private searchBySkill(list: Array<ProfessionalCard>, search: string): Array<ProfessionalCard> {
    const newList = list
      .filter(card => card.habilidades
        .map(habilidades => habilidades.toLowerCase())
        .includes(formatText(search.toLowerCase())));
    return newList;
  }

  private searchByPosition(list: Array<ProfessionalCard>, search: string): Array<ProfessionalCard> {
    const newList: Array<ProfessionalCard> = list.filter(card => formatText(card.senioridade.toLowerCase()) === formatText(search.toLowerCase()))
    return newList
  }

  private pagination(list: Array<ProfessionalCard>): Array<ProfessionalCard> {
    const newList = list ? list.slice(this.first, (this.rows + this.first)) : [];
    return newList;
  }

  protected onPageChange(event: PaginatorState) {
    window.scrollTo(0, 120);

    if (event.first !== undefined) {
      this.first = event.first;
    }
    this.setList()
  }

  protected showDialog() {
    this.visible = true;
  }

  protected modal(id: number): void {
    const element = document.querySelector('[about-vacancy]');
  }

  protected async initializeProfessionalsList(): Promise<void> {
    try {
      this.professional = await this.professionalService.listProfessionals();
      this.professionalSearch = await this.professionalService.listProfessionals();

      this.toShow = this.isEmptylist(this.professionalSearch)
    } catch (error) {
      console.error('Erro ao inicializar a lista de profissionais');
    }
  }

  async ngOnInit() {
  }
}