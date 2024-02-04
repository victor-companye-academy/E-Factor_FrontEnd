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

  protected vacanciesList!: Array<Vacancy>;
  protected filterSelected: string = '';
  protected solicitationError: boolean = false;

  protected nameSearch: string = '';
  protected positionSearch: string = '';

  onSort(event: SortEvent) {
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

  async filterVacancies() {
    try {
      this.vacanciesList = await this.vacancyService.listVacancies();
  
      if (this.nameSearch.length > 0) {
        this.vacanciesList = this.vacanciesList.filter(vacancy =>
          vacancy.nomeEmpresa.toLowerCase().includes(this.nameSearch.toLowerCase())
        );
      }
  
      if (this.positionSearch.length > 0) {
        this.vacanciesList = this.vacanciesList.filter(vacancy =>
          vacancy.senioridade.toLowerCase().includes(this.positionSearch.toLowerCase())
        );
      }
    } catch (error) {
      console.error('Erro ao filtrar vagas:', error);
    }
  }

  protected async initializeVacanciesList(): Promise<void> {
    try {
      this.vacanciesList = await this.vacancyService.listVacancies();
    } catch (error) {
      console.error('Erro ao inicializar a lista de vagas:', error);
    }
  }

  async ngOnInit(){
    await this.initializeVacanciesList();
  }
}
