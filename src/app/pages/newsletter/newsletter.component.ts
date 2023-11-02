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

  public responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
