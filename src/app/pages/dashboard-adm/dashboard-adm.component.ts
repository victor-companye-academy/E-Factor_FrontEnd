import { Component } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { CoinSolicitations } from 'src/app/core/interfaces/coin-solicitations';
import { BusinessService } from 'src/app/core/service/business/business.service';
import { CoinSolicitationsService } from 'src/app/core/service/coin-solicitations/coin-solicitations.service';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';

@Component({
  selector: 'app-dashboard-adm',
  templateUrl: './dashboard-adm.component.html',
  styleUrls: ['./dashboard-adm.component.scss']
})
export class DashboardAdmComponent {

  constructor(private businessService: BusinessService,
    private vacancyService: VacancyService,
    private solicitationService: CoinSolicitationsService,
    private professionalService: ProfessionalService) {
    this.oneWeekAgo.setDate(this.oneWeekAgo.getDate() - 7);

    this.recentProfessionals = this.professionalService.listProfessionalsProvisorio()
      .filter(professional => new Date(professional.creationDate) > this.oneWeekAgo)
      .length;

    this.recentBusiness = this.businessService.listBusiness()
      .filter(business => new Date(business.creationDate) > this.oneWeekAgo)
      .length;
  }

  protected oneWeekAgo = new Date();
  protected totalProfessionals: number = this.professionalService.listProfessionalsProvisorio().length;
  protected totalBusiness: number = this.businessService.listBusiness().length;
  protected totalVacancies!: number;
  protected totalSolicitations: number = this.solicitationService.listCoinSolicitations().length;

  protected recentProfessionals: number;
  protected recentBusiness: number;

  protected pendingSolicitations: Array<CoinSolicitations> = this.solicitationService.listCoinSolicitations()
    .filter(solicitation => solicitation.status === 'Em Análise');
  protected solicitationError: boolean = false;

  onSort(event: SortEvent) {
    new Date(this.professionalService.listProfessionalsProvisorio()[25].creationDate) > this.oneWeekAgo
    event.data?.sort((a: any, b: any) => {
      let result = 0;
      if (new Date(a.creationDate) < new Date(b.creationDate)) {
        result = 1;
      }
      if (new Date(a.creationDate) > new Date(b.creationDate)) {
        result = -1;
      }
      if (new Date(a.creationDate) == new Date(b.creationDate)) {
        result = 0;
      }
      return event.order ? event.order * result : 0;
    });
  }

  getBusinessNameBySolicitationId(id: string): string {
    const business = this.businessService.listBusiness().find(business => business.id === id);
    return business?.name || '';
  }

  async updateTotalVacancies() {
    try {
      const vacanciesList = await this.vacancyService.listVacancies();
      this.totalVacancies = vacanciesList.length;
    } catch (error) {
      console.error('Erro ao obter o total de vagas:', error);
    }
  }

  async ngOnInit() {
    await this.updateTotalVacancies();
  }
}
