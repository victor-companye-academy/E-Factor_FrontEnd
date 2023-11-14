import { Injectable } from '@angular/core';
import { CardProfessional } from '../../interfaces/card-professional';

@Injectable({
  providedIn: 'root'
})
export class CardProfessionalService {

  constructor() { }

  public listProfessionals():Array<CardProfessional>{
    return [
      {
        userName: 'Marcos Henrique 1',
        title: 'Desenvolvedor Senior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'HTML']
      },
      {
        userName: 'João Silva 2',
        title: 'Desenvolvedor Senior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'HTML']
      },
      {
        userName: 'João Silva 3',
        title: 'Desenvolvedor Senior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'HTML']
      },
      {
        userName: 'João Silva 4',
        title: 'Desenvolvedor Senior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'HTML','test']
      },
      {
        userName: 'João Silva 5',
        title: 'Desenvolvedor Senior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'HTML', 'test']
      }
    ]
  }
}
