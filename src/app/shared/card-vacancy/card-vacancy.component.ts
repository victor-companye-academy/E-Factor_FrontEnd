import { Component, Input } from '@angular/core';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { formattedDate } from 'src/app/core/utils/formattedDate';

@Component({
  selector: 'card-vacancy',
  templateUrl: './card-vacancy.component.html',
  styleUrls: ['./card-vacancy.component.scss']
})
export class CardVacancyComponent {
  @Input({ alias: 'short' }) public isShort?: boolean;
  @Input({ alias: 'card' }) public card?: Vacancy;

  onDays(): string {
    const date = this.card?.createDate;

    const year = parseInt(date?.slice(6) as string);
    const month = parseInt(date?.slice(3, 5) as string) - 1;
    const day = parseInt(date?.slice(0, 2) as string);

    // const days = (1000 * 60 * 60 * 24);

    console.log('Data da vaga: ' + date)
    console.log('Data de hoje: ' + formattedDate(new Date()))

    const decimalNumber = (new Date().getTime() - new Date(year, month, day).getTime() ) / (1000 * 60 * 60 * 24)
    const integerNumber = Math.floor(decimalNumber)

    console.log(Math.floor(integerNumber))

    return ''
  }

  ngOnInit() {
    this.onDays()
  }
}
