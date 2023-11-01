import { Component, OnInit } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';
import { CardProfessional } from 'src/app/core/interfaces/card-professional';
import { CardVacancy } from 'src/app/core/interfaces/card-vacancy';
import { CardDetailsService } from 'src/app/core/service/cardDetails/card-details.service';
import { CardProfessionalService } from 'src/app/core/service/cardProfessional/card-professional.service';
import { CardVacancyService } from 'src/app/core/service/cardVacancy/card-vacancy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cardDetailsService: CardDetailsService, private cardProfessionalService: CardProfessionalService, private cardVacancyService: CardVacancyService) { }

  protected about: Array<CardDetails> = this.cardDetailsService.listAbout();

  protected testimonials: Array<CardDetails> = this.cardDetailsService.listTestimonials();

  protected cardVacancy: Array<CardVacancy> = this.cardVacancyService.listVacancies();

  protected cardProfessional: Array<CardProfessional> = this.cardProfessionalService.listProfessionals();

  public responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 3
      },
      {
        breakpoint: '992px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '660px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
