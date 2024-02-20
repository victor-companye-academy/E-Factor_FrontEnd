import { Injectable } from '@angular/core';
import { CoinSolicitations } from '../../interfaces/coin-solicitations';

@Injectable({
  providedIn: 'root'
})
export class CoinSolicitationsService {

  constructor() { }

  private keyRequestCoin: string = 'coin-solicitations';

  listCoinSolicitations(): Array<CoinSolicitations> {
    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem(this.keyRequestCoin);

    if (dataStorage) {

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
      {
        id: '9',
        businessId: '2',
        date: '11-02-2019',
        status: 'Aprovado',
        amount: 100,
        email: 'inter@email.com'
      },
      {
        id: '10',
        businessId: '2',
        date: '11-02-2019',
        status: 'Aprovado',
        amount: 100,
        email: 'inter@email.com'
      },
      {
        id: '11',
        businessId: '2',
        date: '11-02-2019',
        status: 'Aprovado',
        amount: 100,
        email: 'inter@email.com'
      },
      {
        id: '12',
        businessId: '2',
        date: '11-02-2019',
        status: 'Em Análise',
        amount: 100,
        email: 'inter@email.com'
      },
    ]

    sessionStorage.setItem(this.keyRequestCoin, JSON.stringify(solicitationsArray));

    return solicitationsArray;
  }

  listCoinSolicitationsById(id: string): Array<CoinSolicitations> {
    return this.listCoinSolicitations().filter(e => e.businessId === id);
  }

  updateCoinSolicitation(coinSolicitation: CoinSolicitations) {
    const coinSolicitations = this.listCoinSolicitations();
    const index = coinSolicitations.findIndex(e => e.id === coinSolicitation.id);
    if (index !== -1) {
      coinSolicitations[index] = coinSolicitation;
      console.log(coinSolicitations)
      sessionStorage.setItem('coin-solicitations', JSON.stringify(coinSolicitations));
    }
  }
}
