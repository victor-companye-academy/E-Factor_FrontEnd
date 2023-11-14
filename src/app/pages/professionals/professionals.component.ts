
import { Component } from '@angular/core';
import { CardProfessional } from 'src/app/core/interfaces/card-professional';
import { CardProfessionalService } from 'src/app/core/service/cardProfessional/card-professional.service';

interface PaginatorState {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent {

  constructor(private cardProfessionalService: CardProfessionalService) { }

  private nuncamuda = this.cardProfessionalService.listProfessionals()
  protected cardProfessional: Array<CardProfessional> = this.cardProfessionalService.listProfessionals();
  protected cardProfessionalSearch?: Array<CardProfessional>;

  protected first: number = 0;
  protected readonly rows: number = 1;
  protected totalRecords: number = this.cardProfessionalSearch?.length || 0
  private searchObj: any;


  protected setSearch(event: any) {
    this.first = 0

    if (this.validSearch(event)) {
      this.searchObj = event
      console.log("--------------------------------")
      console.log(this.searchObj)
      console.log('entrou 1')


      console.log(this.cardProfessionalSearch = this.cardProfessional.filter(card => card.skills.map(skill => skill.toLocaleUpperCase()).includes(event.otherSkill.toLocaleUpperCase())))

      //returna 2 ^^

      this.totalRecords = this.cardProfessionalSearch.length;

      console.log( this.cardProfessionalSearch = this.cardProfessionalSearch.slice(this.first, (this.rows + this.first)))

      //retorna 1 ^^
      console.log("--------------------------------")


    } else {
      this.searchObj = {}
      console.log(this.cardProfessionalSearch)
      this.cardProfessionalSearch = this.filterList()
    }
  }

  private filterList(event?: any): Array<CardProfessional> {
    let newArray: Array<CardProfessional>;

    if (!event) {
      console.log("index " + this.first + " " + (this.rows + this.first))

      if (this.validSearch(this.searchObj)) {
        console.log(this.searchObj)
        
        return this.cardProfessionalSearch = this.cardProfessional.filter(card => card.skills.map(skill => skill.toLocaleUpperCase()).includes(this.searchObj.otherSkill.toLocaleUpperCase())).slice(this.first, (this.rows + this.first));
      }
      else {

        
        this.cardProfessionalSearch = this.cardProfessional.slice(this.first, (this.rows + this.first));
        console.log(this.cardProfessionalSearch)

        this.totalRecords = this.cardProfessional.length;

        return this.cardProfessionalSearch.slice(this.first, (this.rows + this.first));
      }

    }

    newArray = this.cardProfessional.filter(card => card.skills.map(skill => skill.toLocaleUpperCase()).includes(event.otherSkill.toLocaleUpperCase()));

    this.cardProfessionalSearch = newArray.slice(this.first, this.rows);

    return this.cardProfessionalSearch;

  }

  private validSearch(event: any): boolean {
    if (event && (event.otherSkill || event.otherPosition)) {
      return true;
    }
    return false;
  }

  protected onPageChange(event: PaginatorState) {
    if (event.first !== undefined) {
      this.first = event.first;
    }
    this.filterList()
  }
}