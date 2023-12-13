import { Component } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { CoinSolicitations } from 'src/app/core/interfaces/coin-solicitations';
import { CoinSolicitationsService } from 'src/app/core/service/coin-solicitations/coin-solicitations.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent {

  constructor (private coinSolicitationsService: CoinSolicitationsService) { }

  protected id = '1';
  protected solicitations: Array<CoinSolicitations> = this.coinSolicitationsService.listCoinSolicitationsById(this.id);
  protected filterSelected: string = '';
  protected solicitationError: boolean = false;

  onSort(event: SortEvent) {
    event.data?.sort((a: any, b: any) => {
      let result = 0;
      if (new Date(a.date) < new Date(b.date)) {
        result = 1;
      }
      if (new Date(a.date) > new Date(b.date)) {
        result = -1;
      }
      if (new Date(a.date) == new Date(b.date)) {
        result = 0;
      }
      return event.order ? event.order * result : 0;
    });
  }

  filterSolicitations(status: string){
    if (this.filterSelected === status){
      this.filterSelected = '';
      this.solicitations = this.coinSolicitationsService.listCoinSolicitationsById(this.id);
      return;
    }
    this.filterSelected = status;
    this.solicitations = this.coinSolicitationsService.listCoinSolicitationsById(this.id);
    this.solicitations = this.solicitations.filter(solicitation => solicitation.status === status);
  }
}
