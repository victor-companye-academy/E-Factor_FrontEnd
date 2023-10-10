import { Component, Input } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {

  @Input({alias:'cards'}) public cards?: Array<CardDetails> = []

}
