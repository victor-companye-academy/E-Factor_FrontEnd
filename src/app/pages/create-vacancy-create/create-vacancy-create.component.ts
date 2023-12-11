import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { CreateVacancyService } from 'src/app/core/service/create-vacancy/create-vacancy.service';

@Component({
  selector: 'create-vacancy-create',
  templateUrl: './create-vacancy-create.component.html',
  styleUrls: ['./create-vacancy-create.component.scss']
})
export class CreateVacancyCreateComponent {

  constructor(private vacancyService: CreateVacancyService, private router: Router) { }

  protected vacancy!: Vacancy;
  protected showInterest!: boolean;

  ngOnInit() {
    this.vacancy = this.vacancyService.createVacancy() as Vacancy;
    this.showInterest = false;

    if (this.vacancy.title === undefined || '' && this.vacancy.description === undefined || '') {
      // this.router.navigateByUrl("/create-vacancy");
    }
  }

}
