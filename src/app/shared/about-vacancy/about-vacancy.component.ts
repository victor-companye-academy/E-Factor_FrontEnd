import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Vacancy } from 'src/app/core/interfaces/vacancy';

@Component({
  selector: 'about-vacancy',
  templateUrl: './about-vacancy.component.html',
  styleUrls: ['./about-vacancy.component.scss']
})
export class AboutVacancyComponent {

  @Input({ alias: 'card' }) public card?: Vacancy;

  constructor(private messageService: MessageService) { }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Parabéns', detail: 'Seu interesse na vaga foi registrado!' });
  }
}
