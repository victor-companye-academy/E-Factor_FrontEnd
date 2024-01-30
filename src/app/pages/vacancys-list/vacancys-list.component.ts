import { Component } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';

@Component({
  selector: 'app-vacancys-list',
  templateUrl: './vacancys-list.component.html',
  styleUrls: ['./vacancys-list.component.scss']
})
export class VacancysListComponent {

  constructor (private vacancyService: VacancyService) { }

  protected vacanciesList: Array<Vacancy> = this.vacancyService.listVacancies();
  protected filterSelected: string = '';
  protected solicitationError: boolean = false;

  protected nameSearch: string = '';
  protected positionSearch: string = '';

  onSort(event: SortEvent) {
    event.data?.sort((a: any, b: any) => {
      let result = 0;
      if (new Date(a.createDate) < new Date(b.createDate)) {
        result = 1;
      }
      if (new Date(a.createDate) > new Date(b.createDate)) {
        result = -1;
      }
      if (new Date(a.createDate) == new Date(b.createDate)) {
        result = 0;
      }
      return event.order ? event.order * result : 0;
    });
  }

  filterVacancies(){
    this.vacanciesList = this.vacancyService.listVacancies();
    if(this.nameSearch.length > 0){
      this.vacanciesList = this.vacanciesList.filter(vacancy => vacancy.businessInfo.name.toLowerCase().includes(this.nameSearch.toLowerCase()));
    }
    if(this.positionSearch.length > 0){
      this.vacanciesList = this.vacanciesList.filter(vacancy => vacancy.serniority.toLowerCase().includes(this.positionSearch.toLowerCase()));
    }
  }
}
