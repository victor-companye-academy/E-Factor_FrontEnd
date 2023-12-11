import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { BusinessInfo } from '../../interfaces/business-info';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateVacancyService {

  //Atributo temporário (seraá inserido pelo backend?)
  private static id: number = 1;

  private vacancy: any | undefined = {};

  //Temporário, será recuperado essa informacao da autenticação
  protected businessInfo: BusinessInfo = {
    id: '1',
    photo: '//logodownload.org/wp-content/uploads/2017/05/banco-santander-logo-33.png',
    name: 'Sant test',
    city: 'São Paulo',
    state: 'Sâo Paulo',
    email: 'santtest@gmail.com',
    cellphone: '(11)97601354',
    about: 'Sobre a empresa...',
    coins: 100

  }

  public insertDescription(title: string, description: string) {
    this.vacancy.title = title;
    this.vacancy.description = description;

  }

  public insertDetails(skills: string[], serniority: String, vacancyArea: string, modality: string, daysOfWeek: string[], contract: string, period: string, shift: string) {
    this.vacancy.skills = skills;
    this.vacancy.serniority = serniority;
    this.vacancy.vacancyArea = vacancyArea;
    this.vacancy.modality = modality;
    this.vacancy.daysOfWeek = daysOfWeek;
    this.vacancy.contract = contract;
    this.vacancy.period = period;
    this.vacancy.shift = shift;
  }

  public getVacancy() {
    return this.vacancy
  }

  public createVacancy(): Vacancy | void {

    if (this.vacancy) {
      const newVacancy: Vacancy = {
        id: this.setId(),
        businessId: this.businessInfo.id,
        businessInfo: this.businessInfo,
        position: this.vacancy.serniority,
        title: this.vacancy.title,
        days: '11/12/2023',
        status: 'Ultimas vagas',
        serniority: this.vacancy.serniority,
        contract: this.vacancy.contract,
        mode: this.vacancy.modality,
        description: this.vacancy.description,
        skills: this.vacancy.skills,
        showedInterest: []
      }

      return newVacancy
    }
  }

  //método temporário (será inserido pelo backend?)
  private setId(): string {
    CreateVacancyService.id++;

    return CreateVacancyService.id.toString()
  }
}
