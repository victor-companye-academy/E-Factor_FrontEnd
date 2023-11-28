import { Component, Input } from '@angular/core';
import { Vacancy } from 'src/app/core/interfaces/vacancy';

@Component({
  selector: 'card-vacancy',
  templateUrl: './card-vacancy.component.html',
  styleUrls: ['./card-vacancy.component.scss']
})
export class CardVacancyComponent {

  @Input({ alias: 'short' }) public isShort?: boolean;
  @Input({ alias: 'card' }) public card?:Vacancy;
}
