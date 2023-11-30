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

    let dataStorage: string | null;
    const key: string = 'vacancies'

    dataStorage = sessionStorage.getItem(key);

    if (dataStorage) {
      try {
        console.log("Usando sessionStorage");
        return JSON.parse(dataStorage);
      } catch (error) {
        console.error("Erro ao analisar os dados armazenados:", error);
      }
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

    sessionStorage.setItem(key, JSON.stringify(vacanciesArray));
    console.log("Usando requisição para API");

    return vacanciesArray;

  }

  listInterestedVacancies(id: string): Array<Vacancy> {
    return this.listVacancies().filter(e => e.showedInterest.includes(id));
  }

  listVacanciesByBusiness(id: string): Array<Vacancy> {
    console.log(this.listVacancies().filter(e => e.businessId === id))
    return this.listVacancies().filter(e => e.businessId === id);
  }
}
