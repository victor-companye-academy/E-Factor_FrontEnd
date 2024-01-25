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
    state: 'São Paulo',
    email: 'bradesco@email.com',
    cellphone: '(11) 9912-4567',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo ipsum tempore illo. Perspiciatis eveniet, quasi architecto quidem suscipit odit! Assumenda asperiores facilis quam a consectetur blanditiis recusandae, laboriosam commodi ipsam optio deserunt quasi similique iure. Eveniet, doloribus? Tempora repudiandae in, veniam ab quasi voluptates alias quibusdam quia, fuga beatae quo, autem corrupti suscipit eius quis cum natus dolorum velit dicta accusamus explicabo! Quas rem dolorem perspiciatis consequuntur obcaecati quae esse? Sit hic voluptas minus in numquam alias odit corrupti, illo vel maxime doloremque unde optio ipsum placeat nihil velit natus non repellendus id, aliquam expedita. Dolorem, repellat a.',
    coins: 100,
    creationDate: '01-01-2022',
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
        idVaga: this.setId(),
        // daysOfWeek: this.vacancy.daysOfWeek,
        // period: this.vacancy.period,
        // shift: this.vacancy.shift,
        idEmpresa: this.businessInfo.id,
        // businessInfo: this.businessInfo,
        // vacancyArea: this.vacancy.vacancyArea,
        tituloVaga: this.vacancy.title,
        // day: this.vacancy.day,
        ativo: this.vacancy.status,
        senioridade: this.vacancy.serniority,
        tipoContrato: this.vacancy.contract,
        modalidade: this.vacancy.modality,
        descricaoVaga: this.vacancy.description,
        habilidades: this.vacancy.skills,
        showedInterest: [],
        // expirationDate: this.vacancy.expirationDate,
        horaInclusao: this.vacancy.createDate,
        fotoPerfil: '',
        fotoCapa: undefined,
        nomeEmpresa: ''
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
