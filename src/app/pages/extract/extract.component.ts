import { Component } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { CoinSolicitations } from 'src/app/core/interfaces/coin-solicitations';
import { CoinSolicitationsService } from 'src/app/core/service/coin-solicitations/coin-solicitations.service';
import { parse } from 'date-fns';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent {

  constructor (private coinSolicitationsService: CoinSolicitationsService) {
    this.isLoading = true;
    this.coinSolicitationsService.listCoinsByLoggedUser().subscribe(
      (res: Array<CoinSolicitations>) => {
        this.solicitations = res;
        this.pending = this.solicitations.filter(solicitation => solicitation.status === 'PENDENTE').length;
        this.approved = this.solicitations.filter(solicitation => solicitation.status === 'APROVADA').length;
        this.rejected = this.solicitations.filter(solicitation => solicitation.status === 'REPROVADA').length;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.solicitationError = true;
      }
    )
  }

  protected isLoading: boolean = false;
  protected id = '1';
  protected solicitations: Array<CoinSolicitations> = [];
  protected filterSelected: string = '';
  protected solicitationError: boolean = false;

  protected pending: number = 0;
  protected approved: number = 0;
  protected rejected: number = 0;

  onSort(event: SortEvent) {
    event.data?.sort((a: any, b: any) => {
      const dateA = parse(a.dataSolicitacao.substring(0, 10), 'dd/MM/yyyy', new Date());
      const dateB = parse(b.dataSolicitacao.substring(0, 10), 'dd/MM/yyyy', new Date());
      
      let result = 0;

      if (dateA < dateB) {
        result = 1;
      }
      if (dateA > dateB) {
        result = -1;
      }
      return event.order ? event.order * result : 0;
    });
  }

  filterSolicitations(status: string){
    if (this.filterSelected === status){
      this.filterSelected = '';
      this.coinSolicitationsService.listCoinsByLoggedUser().subscribe(
        (res: Array<CoinSolicitations>) => {
          this.solicitations = res;
        }
      )
      return;
    }
    this.filterSelected = status;
    this.coinSolicitationsService.listCoinsByLoggedUser().subscribe(
      (res: Array<CoinSolicitations>) => {
        this.solicitations = res;
        this.solicitations = this.solicitations.filter(solicitation => solicitation.status === status);
      }
    )
  }
}
