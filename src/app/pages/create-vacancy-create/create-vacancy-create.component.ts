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

  constructor(private createVacancyService: CreateVacancyService, private router: Router, private messageService: MessageService) { }

  protected vacancy!: Vacancy;
  protected showInterest!: boolean;

  onConfirm() {

    this.createVacancyService.createVacancy().subscribe({
      next: res => res,
      error: () =>  this.messageService.add({ severity: 'warn', summary: '', detail: 'Erro ao enviar vaga, tente novamente mais tarde.' })
    })

    // if (this.vacancyService.getCreateVacancy().title) {
    //   if (!this.vacancyService.getWasSendVacancy()) {
    //     this.vacancyService.createVacancy();

    //     this.messageService.add({ severity: 'success', summary: '', detail: 'Vaga criada com sucesso!' });
    //   }

    // } else {
    //        this.messageService.add({ severity: 'warn', summary: '', detail: 'Vaga já enviada' });

    // }
  }

  onClose() {
    this.router.navigateByUrl("/create-vacancy");
  }


  ngOnInit() {
    this.vacancy = this.createVacancyService.getVacancy();
    this.showInterest = false;

    if (this.vacancy.tituloVaga === undefined || '' && this.vacancy.descricaoVaga === undefined || '') {
      this.router.navigateByUrl("/create-vacancy");

    }
  }

}
