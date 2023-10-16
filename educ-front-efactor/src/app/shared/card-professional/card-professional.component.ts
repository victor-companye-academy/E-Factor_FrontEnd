import { Component, Input } from '@angular/core';
import { CardProfessional } from 'src/app/core/interfaces/card-professional';

@Component({
  selector: 'card-professional',
  templateUrl: './card-professional.component.html',
  styleUrls: ['./card-professional.component.scss']
})
export class CardProfessionalComponent {
  @Input({ alias: 'short' }) public isShort?: boolean;
  @Input({ alias: 'cards' }) public cards?: Array<CardProfessional>;
}
