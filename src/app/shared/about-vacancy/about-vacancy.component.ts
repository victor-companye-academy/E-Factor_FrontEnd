import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'about-vacancy',
  templateUrl: './about-vacancy.component.html',
  styleUrls: ['./about-vacancy.component.scss']
})
export class AboutVacancyComponent {
  constructor(private messageService: MessageService) { }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Parabéns', detail: 'Seu interesse na vaga foi registrado!' });
  }
}
