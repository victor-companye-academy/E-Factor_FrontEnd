import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { BusinessInfo } from '../../interfaces/business-info';

@Injectable({
  providedIn: 'root'
})
export class CreateVacancyService {
  constructor() { }

  //Atributo temporário (seraá inserido pelo backend?)
  private static id: number = 1;


  //Temporário, será recuperado essa informacao da autenticação
  private businessInfo: BusinessInfo = {
    id: "1",
    photo: 'assets/imgs/bradesco-photo.png',
    name: 'Banco Bradesco S.A',
    city: 'São Paulo',
    state: 'São Paulo',
    email: 'bradesco@email.com',
    cellphone: '(11) 9912-4567',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo ipsum tempore illo. Perspiciatis eveniet, quasi architecto quidem suscipit odit! Assumenda asperiores facilis quam a consectetur blanditiis recusandae, laboriosam commodi ipsam optio deserunt quasi similique iure. Eveniet, doloribus? Tempora repudiandae in, veniam ab quasi voluptates alias quibusdam quia, fuga beatae quo, autem corrupti suscipit eius quis cum natus dolorum velit dicta accusamus explicabo! Quas rem dolorem perspiciatis consequuntur obcaecati quae esse? Sit hic voluptas minus in numquam alias odit corrupti, illo vel maxime doloremque unde optio ipsum placeat nihil velit natus non repellendus id, aliquam expedita. Dolorem, repellat a.',
    coins: 100,
  }

  private vacancyObj: any | undefined= {};

  public insertDescription(title: string, description: string) {
    this.vacancyObj.title = title;
    this.vacancyObj.description = description;

  }

  public insertDetails(skills:string[], serniority:String, vacancyArea:string, modality:string, daysOfWeek:string[], contract:string, period:string, shift:string){
    this.vacancyObj.skills = skills;
    this.vacancyObj.serniority = serniority;
    this.vacancyObj.vacancyArea = vacancyArea;
    this.vacancyObj.modality = modality;
    this.vacancyObj.daysOfWeek = daysOfWeek;
    this.vacancyObj.contract = contract;
    this.vacancyObj.period = period;
    this.vacancyObj.shift = shift;

  }

  public getVacancy(){
    return this.vacancyObj
  }

  //método temporário (será inserido pelo backend?)
  private setId(): void {
    this.vacancyObj.id = CreateVacancyService.id++;
  }

}
