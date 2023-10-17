import { Component, Input } from '@angular/core';
import { CardVacancy } from 'src/app/core/interfaces/card-vacancy';

@Component({
  selector: 'card-vacancy',
  templateUrl: './card-vacancy.component.html',
  styleUrls: ['./card-vacancy.component.scss']
})
export class CardVacancyComponent {

  @Input({ alias: 'short' }) public isShort?: boolean;
  @Input({ alias: 'cards' }) public cards?: Array<CardVacancy>;
}
