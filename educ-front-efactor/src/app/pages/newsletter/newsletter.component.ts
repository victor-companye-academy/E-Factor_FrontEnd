import { Component, OnInit } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';
import { NewsletterService } from 'src/app/core/service/newsletter/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  constructor(private newsletterService: NewsletterService) { }

  protected novelties: Array<CardDetails> = this.newsletterService.listNovelties();
  protected courses: Array<CardDetails> = this.newsletterService.listCourses();

  public currentNoveltyIndex: number = 0;
  public currentCourseIndex: number = 0;

  isAnimatingNextCourse: boolean = false;
  isAnimatingPrevCourse: boolean = false;

  isAnimatingNextNovelty: boolean = false;
  isAnimatingPrevNovelty: boolean = false;

  private animationDuration: number = 500; 
  private nextDuration: number = 4000; 

  nextNovelty() {
    if (!this.isAnimatingNextNovelty) {
      this.isAnimatingNextNovelty = true;
      this.currentNoveltyIndex = (this.currentNoveltyIndex + 1) % this.novelties.length;
      setTimeout(() => {
        this.isAnimatingNextNovelty = false;
      }, this.animationDuration);
    }
  }

  prevNovelty() {
    if (!this.isAnimatingPrevNovelty) {
      this.isAnimatingPrevNovelty = true;
      this.currentNoveltyIndex = (this.currentNoveltyIndex - 1 + this.novelties.length) % this.novelties.length;
      setTimeout(() => {
        this.isAnimatingPrevNovelty = false;
      }, this.animationDuration);
    }
  }

  nextCourse() {
    if (!this.isAnimatingNextCourse) {
      this.isAnimatingNextCourse = true;
      this.currentCourseIndex = (this.currentCourseIndex + 1) % this.courses.length;
      setTimeout(() => {
        this.isAnimatingNextCourse = false;
      }, this.animationDuration);
    }
  }

  prevCourse() {
    if (!this.isAnimatingPrevCourse) {
      this.isAnimatingPrevCourse = true;
      this.currentCourseIndex = (this.currentCourseIndex - 1 + this.courses.length) % this.courses.length;
      setTimeout(() => {
        this.isAnimatingPrevCourse = false;
      }, this.animationDuration);
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      this.nextCourse()
      this.nextNovelty()
    }, this.nextDuration)
  }
}
