import { Injectable } from '@angular/core';
import { Professional } from '../../interfaces/professional';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor() { }

  public listProfessionals():Array<Professional>{
    return [
      {
        id: 1,
        userName: 'Marcos Henrique 1',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP','Javascript', 'Spring', 'React']
      },
      {
        id: 2,
        userName: 'João Silva 2',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP']
      },
      {
        id: 3,
        userName: 'João Silva 3',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP']
      },
      {
        id: 4,
        userName: 'João Silva 4',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP','test', 'Angular']
      },
      {
        id: 5,
        userName: 'João Silva 5',
        title: 'Pleno',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP', 'test', 'Angular', 'html']
      },
      {
        id: 6,
        userName: 'Marcos Henrique 6',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP']
      },
      {
        id: 7,
        userName: 'João Silva 7',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        id: 8,
        userName: 'João Silva 8',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        id: 9,
        userName: 'João Silva 9',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP','test']
      },
      {
        id: 10,
        userName: 'João Silva 10',
        title: 'Pleno',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'test']
      },
      {
        id: 11,
        userName: 'Marcos Henrique 11',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        id: 12,
        userName: 'João Silva 12',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        id: 13,
        userName: 'João Silva 13',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        id: 14,
        userName: 'João Silva 14',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP','test']
      },
      {
        id: 15,
        userName: 'João Silva 15',
        title: 'Pleno',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'test']
      },
      {
        id: 16,
        userName: 'Marcos Henrique 16',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        id: 17,
        userName: 'João Silva 17',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        id: 18,
        userName: 'João Silva 18',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        id: 19,
        userName: 'João Silva 19',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP','test']
      },
      {
        id: 20,
        userName: 'João Silva 20',
        title: 'Pleno',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'test']
      },
      {
        id: 21,
        userName: 'Marcos Henrique 21',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP']
      },
      {
        id: 22,
        userName: 'João Silva 22',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP']
      },
      {
        id: 23,
        userName: 'João Silva 23',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP', 'HTML']
      },
      {
        id: 24,
        userName: 'João Silva 24',
        title: 'Junior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP', 'HTML','test2']
      },
      {
        id: 25,
        userName: 'João Silva 25',
        title: 'Pleno',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP', 'HTML', 'test2']
      }
    ]
  }
}
