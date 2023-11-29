import { Injectable } from '@angular/core';
import { Professional } from '../../interfaces/professional';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor() { }

  public listProfessionals(): Array<Professional> {
    let dataStorage: string | null;

    const key: string = 'professional' ; 
    const professioanlsArray: Array<Professional> = [
      {
        id: 1,
        userName: 'Marcos Henrique 1',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP', 'Javascript', 'Spring', 'React']
      },
      {
        id: 2,
        userName: 'João Silva 2',
        title: 'Sênior',
        locality: 'São Paulo, SP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        skills: ['Phyton', 'Javascript', 'Spring', 'React', 'PHP']
      },
      
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

    sessionStorage.setItem(key, JSON.stringify(professioanlsArray))
    console.log("Usando requisição para API");

    return professioanlsArray
  }
}
