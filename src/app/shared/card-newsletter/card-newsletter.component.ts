import { Component, Input } from '@angular/core';
import { CardDetailsLink } from 'src/app/core/interfaces/card-details-link';

@Component({
  selector: 'card-newsletter',
  templateUrl: './card-newsletter.component.html',
  styleUrls: ['./card-newsletter.component.scss']
})
export class CardNewsletterComponent {
  @Input({alias:'card'}) public card?: CardDetailsLink;

  redirectToLink(link: string) {
    window.open(link, '_blank');
  }
}
