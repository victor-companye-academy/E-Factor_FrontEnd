import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { CreateVacancyService } from 'src/app/core/service/create-vacancy/create-vacancy.service';

@Component({
  selector: 'create-vacancy-create',
  templateUrl: './create-vacancy-create.component.html',
  styleUrls: ['./create-vacancy-create.component.scss']
})
export class CreateVacancyCreateComponent {

  constructor(private vacancyService: CreateVacancyService, private router: Router, private messageService: MessageService) { }

  protected vacancy!: Vacancy;
  protected showInterest!: boolean;

  onConfirm() {
    if (this.vacancyService.getVacancy().title) {
      // if (!this.vacancyService.getWasSend()) {
        this.vacancyService.createVacancy();

        this.messageService.add({ severity: 'success', summary: '', detail: 'Vaga criado com sucesso!' });
      // } else {
      //   this.messageService.add({ severity: 'warn', summary: '', detail: 'Vaga já enviada' });
      // }
    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível criar a vaga.' });
    }
  }

  onClose() {
    this.router.navigateByUrl("/create-vacancy");
  }


  ngOnInit() {
    this.vacancy = this.vacancyService.getVacancy() as Vacancy;
    this.showInterest = false;

    if (this.vacancy.title === undefined || '' && this.vacancy.description === undefined || '') {
      this.router.navigateByUrl("/create-vacancy");

    }
  }

}