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
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 2',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 3',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 4',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP','test']
      },
      {
        userName: 'João Silva 5',
        title: 'Pleno',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP', 'test', 'Angular']
      },
      {
        userName: 'Marcos Henrique 6',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 7',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 8',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 9',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP','test']
      },
      {
        userName: 'João Silva 10',
        title: 'Pleno',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'test']
      },
      {
        userName: 'Marcos Henrique 11',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 12',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 13',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 14',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP','test']
      },
      {
        userName: 'João Silva 15',
        title: 'Pleno',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'test']
      },
      {
        userName: 'Marcos Henrique 16',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 17',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 18',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 19',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP','test']
      },
      {
        userName: 'João Silva 20',
        title: 'Pleno',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'test']
      },
      {
        userName: 'Marcos Henrique 21',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 22',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP']
      },
      {
        userName: 'João Silva 23',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP', 'HTML']
      },
      {
        userName: 'João Silva 24',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP', 'HTML','test2']
      },
      {
        userName: 'João Silva 25',
        title: 'Pleno',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP', 'HTML', 'test2']
      }
    ]
  }
}
