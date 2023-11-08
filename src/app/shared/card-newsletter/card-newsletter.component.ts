import { Component, Input } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';

@Component({
  selector: 'card-newsletter',
  templateUrl: './card-newsletter.component.html',
  styleUrls: ['./card-newsletter.component.scss']
})
export class CardNewsletterComponent {
  @Input({alias:'card'}) public card?: CardDetails;
}
