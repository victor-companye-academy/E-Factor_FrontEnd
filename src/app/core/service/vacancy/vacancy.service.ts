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

    dataStorage = sessionStorage.getItem('vacancys');

    if (dataStorage) {
      console.log("Usando sessionStorage");

      return JSON.parse(dataStorage);
    }
  
    const vacancysArray: Array<Vacancy> = [
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

    sessionStorage.setItem('vacancys', JSON.stringify(vacancysArray));
    console.log("Usando requisição para API");

    return vacancysArray;
  }

  public updateVacancys(updatedVacancy: any) {
    const vacancysArray: Array<Vacancy> = this.listVacancies();
    const index = vacancysArray.findIndex(vacancy => vacancy.id === vacancy.id);
  
    if (index !== -1) {
      vacancysArray[index] = updatedVacancy;
      sessionStorage.setItem('vacancys', JSON.stringify(vacancysArray));
    }
  }

  public addNewVacancy(newVacancy: any) {
    const vacancysArray: Array<Vacancy> = this.listVacancies();
    vacancysArray.push(newVacancy);
    sessionStorage.setItem('vacancys', JSON.stringify(vacancysArray));
  }

  public deleteVacancy(id: string) {
    const vacancysArray: Array<Vacancy> = this.listVacancies();
    const index = vacancysArray.findIndex(vacancy => vacancy.id === id);
    vacancysArray.splice(index, 1);
    sessionStorage.setItem('vacancys', JSON.stringify(vacancysArray));
  }

  listInterestedVacancies(id: string): Array<Vacancy> {
    return this.listVacancies().filter(e => e.showedInterest.includes(id));
  }

  listVacanciesByBusiness(id: string): Array<Vacancy> {
    console.log(this.listVacancies().filter(e => e.businessId === id))
    return this.listVacancies().filter(e => e.businessId === id);
  }
}
