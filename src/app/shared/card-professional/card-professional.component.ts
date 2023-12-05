import { Component, Input } from '@angular/core';
import { ProfessionalInfo } from 'src/app/core/interfaces/professional-info';

@Component({
  selector: 'card-professional',
  templateUrl: './card-professional.component.html',
  styleUrls: ['./card-professional.component.scss']
})
export class CardProfessionalComponent {
  @Input({ alias: 'short' }) public isShort?: boolean;
  @Input({ alias: 'card' }) public card?:ProfessionalInfo;
}
