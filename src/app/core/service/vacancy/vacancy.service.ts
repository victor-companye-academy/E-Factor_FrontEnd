import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private url: string = 'http://localhost:8085/ms-empresa/v1/listar-vagas';

  constructor(private http: HttpClient) { }

  private keyVacanciesStorage: string = 'vacancies';
  private keyCompanyStorage: string = 'companyVacancy';

  private businessId = '1';

  private vacanciesArray: Array<Vacancy> = []

  public async listVacancies(): Promise<Array<Vacancy>> {
    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem(this.keyVacanciesStorage);

    if (dataStorage && JSON.parse(dataStorage).length > 0) {
      try {
        return JSON.parse(dataStorage);
      } catch (error) {
        console.error("Erro ao analisar os dados armazenados:", error);
      }
    }

    try {
      const res = await lastValueFrom(this.getVacancies());
      this.vacanciesArray = [...res as Vacancy[]];
      sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(this.vacanciesArray));
    } catch (error) {
      console.log('Erro ao processar a requisição da listagem de vagas', error);
    }

    return this.vacanciesArray;
  }

  public listCompanyVacancies(): Array<Vacancy> {
    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem(this.keyCompanyStorage);

    if (dataStorage) {
      try {
        return JSON.parse(dataStorage);
      } catch (error) {
        console.error("Erro ao analisar os dados armazenados:", error);
      }
    }

    const companyVacancies = this.filterCompany();

    sessionStorage.setItem(this.keyCompanyStorage, JSON.stringify(companyVacancies));
    return companyVacancies;

  }

  private filterCompany(): Array<Vacancy> {
    return this.vacanciesArray.filter(company => company.idEmpresa === this.businessId);
  }

  public getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.url)
      .pipe(
        res => res,
        error => error
      );
  }

  public async updateVacancy(updatedVacancy: any) {
    try {
      const vacanciesArray: Array<Vacancy> = await this.listVacancies();
      const index = vacanciesArray.findIndex(vacancy => vacancy.idVaga === updatedVacancy.idVaga);

      if (index !== -1) {
        vacanciesArray[index] = updatedVacancy;
        sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(vacanciesArray));
      }
    } catch (error) {
      console.error('Erro ao atualizar vaga:', error);
    }
  }

  public async addNewVacancy() {
    try {
      const vacanciesArray: Array<Vacancy> = await this.listVacancies();
      sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(vacanciesArray));
    } catch (error) {
      console.error('Erro ao adicionar nova vaga:', error);
    }
  }

  public async deleteVacancy(id: string) {
    try {
      const vacanciesArray: Array<Vacancy> = await this.listVacancies();
      const index = vacanciesArray.findIndex(vacancy => vacancy.idVaga === id);

      if (index !== -1) {
        vacanciesArray.splice(index, 1);
        sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(vacanciesArray));
      }
    } catch (error) {
      console.error('Erro ao excluir vaga:', error);
    }
  }


  public insertVacancy(vacancy: Vacancy): number {
    vacancy.idVaga = (this.vacanciesArray.length + 1).toString()
    console.log(this.listVacancies())

    const lastposition = this.vacanciesArray.push(vacancy);

    sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(this.vacanciesArray));
    sessionStorage.setItem(this.keyCompanyStorage, JSON.stringify(this.filterCompany()));
    return lastposition;
  }

  public listInterestedVacancies(id: string): Array<Vacancy> {
    return this.listCompanyVacancies().filter(e => e.idVaga?.includes(id))
  }

  public async listVacanciesByBusiness(id: string): Promise<Array<Vacancy>> {
    try {
      const allVacancies: Array<Vacancy> = await this.listVacancies();
      const vacanciesByBusiness: Array<Vacancy> = allVacancies.filter(vacancy => vacancy.idEmpresa === id);
      return vacanciesByBusiness;
    } catch (error) {
      console.error('Erro ao listar vagas por empresa');
      return [];
    }
  }


}
