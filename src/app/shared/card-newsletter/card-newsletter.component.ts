import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardDetailsLink } from 'src/app/core/interfaces/card-details-link';

@Component({
  selector: 'card-newsletter',
  templateUrl: './card-newsletter.component.html',
  styleUrls: ['./card-newsletter.component.scss']
})
export class CardNewsletterComponent {
  @Input({alias:'card'}) public card?: CardDetailsLink;
  protected isHome: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  redirectToLink(link: string) {
    window.open(link, '_blank');
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.url.length > 0 && this.activatedRoute.snapshot.url[0].path === 'newsletter') {
      this.isHome = false;
    } else {
      this.isHome = true;
    }
  }
}
