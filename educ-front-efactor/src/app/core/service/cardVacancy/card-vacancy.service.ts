import { Injectable } from '@angular/core';
import { CardVacancy } from '../../interfaces/card-vacancy';

@Injectable({
  providedIn: 'root'
})
export class CardVacancyService {

  constructor() { }

  public listVacancies(): Array<CardVacancy> {
    return [
      {
        companyName: 'Google',
        title: 'Desenvolvedor Senior',
        days: 'Há 6 dias',
        contract: 'CLT',
        locality: 'São Paulo - SP',
        description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse maecenas condimentum blandit vitae tortor dis nec mattis. Ipsum eu praesent orci lacus. Sed lorem id duis tempor felis tempor molestie. Commodo nisl sed massa varius magna interdum. Pulvinar nibh dignissim egestas ut. Nibh amet vitae sed duis sit diam. Feugiat sit viverra habitant platea adipiscing amet in nisi cursus. Feugiat mi rutrum velit vitae.',
        mode: 'Home Office',
        skills: ['Angular', 'Javascript', 'Typescript', 'Spring'],
        status: 'Ultimas Vagas',
      },
      {
        companyName: 'Google',
        title: 'Desenvolvedor Senior',
        days: 'Há 6 dias',
        contract: 'CLT',
        locality: 'São Paulo - SP',
        description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse maecenas condimentum blandit vitae tortor dis nec mattis. Ipsum eu praesent orci lacus. Sed lorem id duis tempor felis tempor molestie. Commodo nisl sed massa varius magna interdum. Pulvinar nibh dignissim egestas ut. Nibh amet vitae sed duis sit diam. Feugiat sit viverra habitant platea adipiscing amet in nisi cursus. Feugiat mi rutrum velit vitae.',
        mode: 'Home Office',
        skills: ['Angular', 'Javascript', 'Typescript', 'Spring'],
        status: 'Ultimas Vagas',
        src: 'https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png'
      }]
  }
}
