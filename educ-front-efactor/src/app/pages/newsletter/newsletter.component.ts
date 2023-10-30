import { Component } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';
import { CardDetailsService } from 'src/app/core/service/cardDetails/card-details.service';
import { NewsletterService } from 'src/app/core/service/newsletter/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  constructor(private newsletterService: NewsletterService) { }


  protected novelties: Array<CardDetails> = this.newsletterService.listNovelties();
  protected courses: Array<CardDetails> = this.newsletterService.listCourses();


  public currentNoveltyIndex: number = 0;
  public currentCourseIndex: number = 0;


  nextNovelty() {
    this.currentNoveltyIndex = (this.currentNoveltyIndex + 1) % this.novelties.length;
  }

  prevNovelty() {
    this.currentNoveltyIndex = (this.currentNoveltyIndex - 1 + this.novelties.length) % this.novelties.length;
  }

  nextCourse() {
    this.currentCourseIndex = (this.currentCourseIndex + 1) % this.courses.length;
  }

  prevCourse() {
    this.currentCourseIndex = (this.currentCourseIndex - 1 + this.courses.length) % this.courses.length;
  }

}
