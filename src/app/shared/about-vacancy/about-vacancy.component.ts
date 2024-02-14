import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Card } from 'primeng/card';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';

@Component({
  selector: 'about-vacancy',
  templateUrl: './about-vacancy.component.html',
  styleUrls: ['./about-vacancy.component.scss']
})
export class AboutVacancyComponent {

  @Input({ alias: 'card' }) public card?: Vacancy;
  @Input() public showInterest!: boolean;

  constructor(private messageService: MessageService, private vacancyService: VacancyService) { }
  
  onImageError(event: any) {
    event.target.src = 'assets/imgs/default-profile.svg'; // Define o src para a imagem padrão
  }

  // show() {
  //   this.messageService.add({ severity: 'success', summary: 'Parabéns', detail: 'Seu interesse na vaga foi registrado!' });
  //   this.assignInterest();
  // }

  // assignInterest(){
  //   this.card?.showedInterest?.push("2")
  //   this.vacancyService.updateVacancy(this.card);
  // }
}
