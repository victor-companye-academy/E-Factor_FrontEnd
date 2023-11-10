
import { Component, OnInit } from '@angular/core';
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
export class ProfessionalsComponent implements OnInit {


  protected setSearch(event: any) {
    console.log(event)
    console.log(this.filterList(event));

    // throw new Error('Method not implemented.');
  }

  constructor(private cardProfessionalService: CardProfessionalService) { }

  protected cardProfessional: Array<CardProfessional> = this.cardProfessionalService.listProfessionals();

  protected cardProfessionalSearch: Array<CardProfessional> = this.cardProfessionalService.listProfessionals();


  // Setar dados conforme lista

  protected first: number = 0;
  protected rows: number = 10;
  protected totalRecords: number = 250;

  // ------

  filterList(event: any): Array<CardProfessional> {
    return this.cardProfessional.filter(card => card.skills.map(skill => skill.toLocaleUpperCase()).includes(event.otherSkill.toLocaleUpperCase()))
  }



  protected onPageChange(event: PaginatorState) {
    console.log(event)
    if (event.first !== undefined) {
      this.first = event.first;
    }
    if (event.rows !== undefined) {
      this.rows = event.rows;
    }
  }

  ngOnInit() { }
}