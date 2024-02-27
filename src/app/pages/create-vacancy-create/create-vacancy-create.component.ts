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
  protected wasClicked: boolean = false;

  async onConfirm() {
    sessionStorage.removeItem('vacancies');

    this.wasClicked = true;

    (await this.createVacancyService.createVacancy()).subscribe({
      next: () => {

        setTimeout(() => {
          this.messageService.add({ severity: 'success', summary: '', detail: 'Vaga criada com sucesso!' })
        }, 500)
        this.router.navigateByUrl("/create-vacancy");
      },
      error: () => {
        this.messageService.add({ severity: 'warn', summary: '', detail: 'Erro ao enviar vaga, tente novamente mais tarde.' })
      }
    })

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
