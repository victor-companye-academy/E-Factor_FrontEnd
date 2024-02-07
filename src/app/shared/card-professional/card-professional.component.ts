import { Component, Input } from '@angular/core';
import { ProfessionalCard } from 'src/app/core/interfaces/professional-card';

@Component({
  selector: 'card-professional',
  templateUrl: './card-professional.component.html',
  styleUrls: ['./card-professional.component.scss']
})
export class CardProfessionalComponent {
  @Input({ alias: 'short' }) public isShort?: boolean;
  @Input({ alias: 'card' }) public card?:ProfessionalCard;
  @Input({ alias: 'isLogged' }) public isLogged?: boolean;
}
