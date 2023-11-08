import { Component } from '@angular/core';
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
export class HomeComponent {

  constructor(private cardDetailsService:CardDetailsService, private cardProfessionalService:CardProfessionalService, private cardVacancyService:CardVacancyService){}

  protected about: Array<CardDetails> = this.cardDetailsService.listAbout();

  protected testimonials: Array<CardDetails> = this.cardDetailsService.listTestimonials();

  protected cardVacancy: Array<CardVacancy> = this.cardVacancyService.listVacancies();

  protected cardProfessional: Array<CardProfessional> = this.cardProfessionalService.listProfessionals();

  public currentIndex: number = 0;

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevCard() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
