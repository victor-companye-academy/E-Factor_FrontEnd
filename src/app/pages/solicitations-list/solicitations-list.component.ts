import { Component } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { CoinSolicitations } from 'src/app/core/interfaces/coin-solicitations';
import { CoinSolicitationsService } from 'src/app/core/service/coin-solicitations/coin-solicitations.service';

@Component({
  selector: 'app-solicitations-list',
  templateUrl: './solicitations-list.component.html',
  styleUrls: ['./solicitations-list.component.scss']
})
export class SolicitationsListComponent {

  constructor (private coinSolicitationsService: CoinSolicitationsService) { }

  protected solicitations: Array<CoinSolicitations> = this.coinSolicitationsService.listCoinSolicitations();
  protected filterSelected: string = '';
  protected solicitationError: boolean = false;

  protected isApproveModalOpen: boolean = false;
  protected isRejectModalOpen: boolean = false;
  protected selectedSolicitationId: number = -1;
  protected solicitation: CoinSolicitations = this.solicitations[this.selectedSolicitationId];

  protected pending: number = this.coinSolicitationsService.listCoinSolicitations().filter(solicitation => solicitation.status === 'Em Análise').length;
  protected approved: number = this.coinSolicitationsService.listCoinSolicitations().filter(solicitation => solicitation.status === 'Aprovado').length;
  protected rejected: number = this.coinSolicitationsService.listCoinSolicitations().filter(solicitation => solicitation.status === 'Reprovado').length;

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
      this.solicitations = this.coinSolicitationsService.listCoinSolicitations();
      return;
    }
    this.filterSelected = status;
    this.solicitations = this.coinSolicitationsService.listCoinSolicitations();
    this.solicitations = this.solicitations.filter(solicitation => solicitation.status === status);
  }

  openApproveModal(index: number) {
    this.selectedSolicitationId = index;
    this.solicitation = this.solicitations[this.selectedSolicitationId];
    this.isRejectModalOpen = false;
    this.isApproveModalOpen = true;
  }

  openRejectModal(index: number) {
    this.selectedSolicitationId = index;
    this.solicitation = this.solicitations[this.selectedSolicitationId];
    this.isApproveModalOpen = false;
    this.isRejectModalOpen = true;
  }

  closeModal() {
    this.isApproveModalOpen = false;
    this.isRejectModalOpen = false;
  }

  saveChanges(updatedSolicitation: any) {
    this.solicitation = updatedSolicitation;
    this.coinSolicitationsService.updateCoinSolicitation(this.solicitation);
    this.pending = this.coinSolicitationsService.listCoinSolicitations().filter(solicitation => solicitation.status === 'Em Análise').length;
    this.approved = this.coinSolicitationsService.listCoinSolicitations().filter(solicitation => solicitation.status === 'Aprovado').length;
    this.rejected = this.coinSolicitationsService.listCoinSolicitations().filter(solicitation => solicitation.status === 'Reprovado').length;

    this.closeModal();
  }
}
