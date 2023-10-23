import { Component } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';
import { CardDetailsService } from 'src/app/core/service/card-details.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private cardDetailsService:CardDetailsService){}

  protected about: Array<CardDetails> = this.cardDetailsService.getAboutList();

  protected testimonials: Array<CardDetails> = this.cardDetailsService.getTestimonialsList();

  public currentIndex: number = 0;

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevCard() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
