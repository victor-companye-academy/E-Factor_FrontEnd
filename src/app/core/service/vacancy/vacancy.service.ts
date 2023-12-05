import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { BusinessService } from '../business/business.service';
import { BusinessInfo } from '../../interfaces/business-info';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private businessService: BusinessService) { }

  public listVacancies(): Array<Vacancy> {
    const businesses = this.businessService.listBusiness();

    console.log("entrei no serviço");

    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem('vacancies');

    if (dataStorage) {
      console.log("Usando sessionStorage");

      return JSON.parse(dataStorage);
    }
  
    const vacanciesArray: Array<Vacancy> = [
      {
        id: '1',
        businessId: '1',
        businessInfo: businesses.find(e => e.id === '1') as BusinessInfo,
        position: 'sênior',
        title: 'Desenvolvedor Senior',
        days: 'Há 6 dias',
        status: 'Ultimas Vagas', 
        contract: 'CLT',
        mode: 'Home Office',
        description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse maecenas condimentum blandit vitae tortor dis nec mattis. Ipsum eu praesent orci lacus. Sed lorem id duis tempor felis tempor molestie. Commodo nisl sed massa varius magna interdum. Pulvinar nibh dignissim egestas ut. Nibh amet vitae sed duis sit diam. Feugiat sit viverra habitant platea adipiscing amet in nisi cursus. Feugiat mi rutrum velit vitae.',
        skills: ['Angular', 'Javascript', 'Typescript', 'Spring'],
        showedInterest: ['1'],
      },
      {
        id: '2',
        businessId: '2',
        businessInfo: businesses.find(e => e.id === '2') as BusinessInfo,
        position: 'sênior',
        title: 'Desenvolvedor Senior',
        days: 'Há 6 dias',
        status: 'Ultimas Vagas',
        contract: 'CLT',
        mode: 'Home Office',
        description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse maecenas condimentum blandit vitae tortor dis nec mattis. Ipsum eu praesent orci lacus. Sed lorem id duis tempor felis tempor molestie. Commodo nisl sed massa varius magna interdum. Pulvinar nibh dignissim egestas ut. Nibh amet vitae sed duis sit diam. Feugiat sit viverra habitant platea adipiscing amet in nisi cursus. Feugiat mi rutrum velit vitae.',
        skills: ['Angular', 'Javascript', 'Typescript', 'Spring'],
        showedInterest: ['1', '2', '3'],
      },
    ];

    sessionStorage.setItem('vacancies', JSON.stringify(vacanciesArray));
    console.log("Usando requisição para API");

    return vacanciesArray;
  }

  public updateVacancys(updatedVacancy: any) {
    const vacanciesArray: Array<Vacancy> = this.listVacancies();
    const index = vacanciesArray.findIndex(vacancy => vacancy.id === vacancy.id);
  
    if (index !== -1) {
      vacanciesArray[index] = updatedVacancy;
      sessionStorage.setItem('vacancies', JSON.stringify(vacanciesArray));
    }
  }

  public addNewVacancy(newVacancy: any) {
    const vacanciesArray: Array<Vacancy> = this.listVacancies();
    vacanciesArray.push(newVacancy);
    sessionStorage.setItem('vacancies', JSON.stringify(vacanciesArray));
  }

  public deleteVacancy(id: string) {
    const vacanciesArray: Array<Vacancy> = this.listVacancies();
    const index = vacanciesArray.findIndex(vacancy => vacancy.id === id);
    vacanciesArray.splice(index, 1);
    sessionStorage.setItem('vacancies', JSON.stringify(vacanciesArray));
  }

  listInterestedVacancies(id: string): Array<Vacancy> {
    return this.listVacancies().filter(e => e.showedInterest.includes(id));
  }

  listVacanciesByBusiness(id: string): Array<Vacancy> {
    console.log(this.listVacancies().filter(e => e.businessId === id))
    return this.listVacancies().filter(e => e.businessId === id);
  }
}
