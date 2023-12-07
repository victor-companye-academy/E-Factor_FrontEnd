import { Injectable } from '@angular/core';
import { CoinSolicitations } from '../../interfaces/coin-solicitations';

@Injectable({
  providedIn: 'root'
})
export class CoinSolicitationsService {

  constructor() { }

  listCoinSolicitations(): Array<CoinSolicitations>{
    console.log("entrei no serviço");

    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem('coin-solicitations');

    if (dataStorage) {
      console.log("Usando sessionStorage");

      return JSON.parse(dataStorage);
    }

    const solicitationsArray: Array<CoinSolicitations> = [
      {
        id: '1',
        businessId: '1',
        date: '01-01-2022',
        status: 'Em Análise',
        amount: 100,
        email: 'bradesco@email.com'
      },
      {
        id: '2',
        businessId: '2',
        date: '01-04-2023',
        status: 'Aprovado',
        amount: 100,
        email: 'bradesco@email.com'
      },
      {
        id: '3',
        businessId: '1',
        date: '10-02-2023',
        status: 'Reprovado',
        amount: 100,
        email: 'bradesco@email.com'
      },
      {
        id: '4',
        businessId: '1',
        date: '10-12-2020',
        status: 'Reprovado',
        amount: 100,
        email: 'bradesco@email.com'
      },
      {
        id: '5',
        businessId: '1',
        date: '10-04-2020',
        status: 'Aprovado',
        amount: 100,
        email: 'bradesco@email.com'
      },
      {
        id: '6',
        businessId: '1',
        date: '09-02-2020',
        status: 'Aprovado',
        amount: 100,
        email: 'bradesco@email.com'
      },
      {
        id: '7',
        businessId: '1',
        date: '12-02-2019',
        status: 'Aprovado',
        amount: 100,
        email: 'bradesco@email.com'
      },
      {
        id: '8',
        businessId: '1',
        date: '11-02-2019',
        status: 'Aprovado',
        amount: 100,
        email: 'bradesco@email.com'
      },
    ]

    sessionStorage.setItem('coin-solicitations', JSON.stringify(solicitationsArray));
    console.log("Usando requisição para API");

    return solicitationsArray;
  }

  listCoinSolicitationsById(id: string): Array<CoinSolicitations> {
    return this.listCoinSolicitations().filter(e => e.businessId === id);
  }
}
