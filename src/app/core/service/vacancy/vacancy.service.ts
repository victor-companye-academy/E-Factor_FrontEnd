import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor() { }

  public listVacancies(): Array<Vacancy> {
    let dataStorage: string | null;

    const key: string = 'vacancies'
    const vacanciesArray: Array<Vacancy> = [
      {
        id: 1,
        position: 'senior',
        companyName: 'E-Factor',
        title: 'Desenvolvedor Senior',
        days: 'Há 6 dias',
        contract: 'CLT',
        locality: 'São Paulo - SP',
        description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse maecenas condimentum blandit vitae tortor dis nec mattis. Ipsum eu praesent orci lacus. Sed lorem id duis tempor felis tempor molestie. Commodo nisl sed massa varius magna interdum. Pulvinar nibh dignissim egestas ut. Nibh amet vitae sed duis sit diam. Feugiat sit viverra habitant platea adipiscing amet in nisi cursus. Feugiat mi rutrum velit vitae.',
        mode: 'Home Office',
        skills: ['Angular', 'Javascript', 'Typescript', 'Spring'],
        status: 'Ultimas Vagas',
        address: 'Av. Paulista, 901 - Cerqueira César, São Paulo - SP, 01411-100',
        email: 'efactor@gmail.com',
        phone: '(11) 97854-4359'
      }, {
        id: 1,
        position: 'senior',
        companyName: 'E-Factor',
        title: 'Desenvolvedor Senior',
        days: 'Há 6 dias',
        contract: 'CLT',
        locality: 'São Paulo - SP',
        description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse maecenas condimentum blandit vitae tortor dis nec mattis. Ipsum eu praesent orci lacus. Sed lorem id duis tempor felis tempor molestie. Commodo nisl sed massa varius magna interdum. Pulvinar nibh dignissim egestas ut. Nibh amet vitae sed duis sit diam. Feugiat sit viverra habitant platea adipiscing amet in nisi cursus. Feugiat mi rutrum velit vitae.',
        mode: 'Home Office',
        skills: ['Angular', 'Javascript', 'Typescript', 'Spring'],
        status: 'Ultimas Vagas',
        address: 'Av. Paulista, 901 - Cerqueira César, São Paulo - SP, 01411-100',
        email: 'efactor@gmail.com',
        phone: '(11) 97854-4359'
      },
      {
        id: 1,
        position: 'senior',
        companyName: 'E-Factor',
        title: 'Desenvolvedor Senior',
        days: 'Há 6 dias',
        contract: 'CLT',
        locality: 'São Paulo - SP',
        description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse maecenas condimentum blandit vitae tortor dis nec mattis. Ipsum eu praesent orci lacus. Sed lorem id duis tempor felis tempor molestie. Commodo nisl sed massa varius magna interdum. Pulvinar nibh dignissim egestas ut. Nibh amet vitae sed duis sit diam. Feugiat sit viverra habitant platea adipiscing amet in nisi cursus. Feugiat mi rutrum velit vitae.',
        mode: 'Home Office',
        skills: ['Angular', 'Javascript', 'Typescript', 'Spring'],
        status: 'Ultimas Vagas',
        address: 'Av. Paulista, 901 - Cerqueira César, São Paulo - SP, 01411-100',
        email: 'efactor@gmail.com',
        phone: '(11) 97854-4359'
      }
    ];

    dataStorage = sessionStorage.getItem(key);

    if (dataStorage) {
      try {
        console.log("Usando sessionStorage");
        return JSON.parse(dataStorage);
      } catch (error) {
        console.error("Erro ao analisar os dados armazenados:", error);
      }
    }

    sessionStorage.setItem(key, JSON.stringify(vacanciesArray))
    console.log("Usando requisição para API");

    return vacanciesArray
  }

  public getById(id: number | undefined): Vacancy {
    try {
      const listVacancies = this.listVacancies()
      const card = listVacancies.filter(e => e.id === id)
      return card[0]

    } catch (error) {
      throw console.log(error)
    }
  }
}
