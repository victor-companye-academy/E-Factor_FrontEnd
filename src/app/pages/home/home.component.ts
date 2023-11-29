import { Component, OnInit } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';
import { CardProfessional } from 'src/app/core/interfaces/professional';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { CardDetailsService } from 'src/app/core/service/cardDetails/card-details.service';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cardDetailsService: CardDetailsService, private professionalService: ProfessionalService, private vacancyService: VacancyService) { }

  protected about: Array<CardDetails> = this.cardDetailsService.listAbout();

  protected testimonials: Array<CardDetails> = this.cardDetailsService.listTestimonials();

  protected cardVacancy: Array<Vacancy> = this.vacancyService.listVacancies();

  protected cardProfessional: Array<CardProfessional> = this.professionalService.listProfessionals();

  public responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '992px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
