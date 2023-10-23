import { Injectable } from '@angular/core';
import { CardProfessional } from '../../interfaces/card-professional';

@Injectable({
  providedIn: 'root'
})
export class CardProfessionalService {

  constructor() { }

  public getProfessionalsList():Array<CardProfessional>{
    return [
      {
        userName: 'Marcos Henrique',
        title: 'Desenvolvedor Senior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'HTML']
      },
      {
        userName: 'João Silva',
        title: 'Desenvolvedor Senior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'HTML']
      }
    ]
  }
}
