import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { BusinessInfo } from '../../interfaces/business-info';
import { VacancyService } from '../vacancy/vacancy.service';
import { Router } from '@angular/router';
import { formattedDate } from 'src/app/core/utils/formattedDate';

@Injectable({
  providedIn: 'root'
})
export class CreateVacancyService {

  constructor(private vacancyService: VacancyService, private router: Router) {
  }

  //Atributo temporário (seraá inserido pelo backend?)
  private static id: number = 1;
  private static wasSendVacancy: boolean = false;

  private vacancy: any | undefined = {};

  public getWasSendVacancy(): boolean {
    return CreateVacancyService.wasSendVacancy;
  }

  public setWasSendVacancy(wasSend:boolean): void {
    CreateVacancyService.wasSendVacancy = wasSend;
  }

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

  public insertDetails(skills: string[], serniority: string, vacancyArea: string, modality: string, daysOfWeek: string[], contract: string, period: string, shift: string, expirationDate: string) {
    this.vacancy.skills = skills;
    this.vacancy.serniority = serniority;
    this.vacancy.vacancyArea = vacancyArea;
    this.vacancy.modality = modality;
    this.vacancy.daysOfWeek = daysOfWeek;
    this.vacancy.contract = contract;
    this.vacancy.period = period;
    this.vacancy.shift = shift;
    // this.vacancy.days = '11/12/2023';
    // this.vacancy.status = 'Ultimas vagas';
    this.vacancy.showedInterest = [];
    this.vacancy.expirationDate = expirationDate;
    this.vacancy.createDate = formattedDate(new Date());
  }

  private insertBusiness() {
    this.vacancy.businessId = this.businessInfo.id;
    this.vacancy.businessInfo = this.businessInfo;
  }

  public getVacancy(): Vacancy | any {
    if (this.vacancy) {
      const newVacancy: Vacancy = {
        id: this.setId(),
        daysOfWeek: this.vacancy.daysOfWeek,
        period: this.vacancy.period,
        shift: this.vacancy.shift,
        businessId: this.businessInfo.id,
        businessInfo: this.businessInfo,
        vacancyArea: this.vacancy.vacancyArea,
        title: this.vacancy.title,
        day: this.vacancy.day,
        status: this.vacancy.status,
        serniority: this.vacancy.serniority,
        contract: this.vacancy.contract,
        modality: this.vacancy.modality,
        description: this.vacancy.description,
        skills: this.vacancy.skills,
        showedInterest: [],
        expirationDate: this.vacancy.expirationDate,
        createDate: this.vacancy.createDate
      }
      return newVacancy
    }
  }

  public createVacancy() {
    CreateVacancyService.wasSendVacancy = true;

    this.businessInfo.coins -= 1;
    this.insertBusiness()

    this.vacancyService.insertVacancy(this.vacancy)
    // this.router.navigateByUrl('/create-vacancy')

    this.vacancy = {}
  }

  //método temporário (será inserido pelo backend?)
  private setId(): string {
    CreateVacancyService.id++;

    return CreateVacancyService.id.toString()
  }
}
