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
              private professionalService: ProfessionalService) 
              { 
                this.oneWeekAgo.setDate(this.oneWeekAgo.getDate() - 7); 

                this.recentProfessionals = this.professionalService.listProfessionals()
                  .filter(professional => new Date(professional.creationDate) > this.oneWeekAgo)
                  .length;

                this.recentBusiness = this.businessService.listBusiness()
                  .filter(business => new Date(business.creationDate) > this.oneWeekAgo)
                  .length;
              }
              
  protected oneWeekAgo = new Date();
  protected totalProfessionals: number = this.professionalService.listProfessionals().length;
  protected totalBusiness: number = this.businessService.listBusiness().length;
  protected totalVacancies: number = this.vacancyService.listVacancies().length;
  protected totalSolicitations: number = this.solicitationService.listCoinSolicitations().length;

  protected recentProfessionals: number;
  protected recentBusiness: number;

  protected pendingSolicitations: Array<CoinSolicitations> = this.solicitationService.listCoinSolicitations()
    .filter(solicitation => solicitation.status === 'Em Análise');
  protected solicitationError: boolean = false;

  onSort(event: SortEvent) {
    console.log(new Date(this.professionalService.listProfessionals()[25].creationDate) > this.oneWeekAgo)
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
}
