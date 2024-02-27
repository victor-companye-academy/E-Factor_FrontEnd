import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom, map } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private url: string = 'https://internal-gateway.efactor.digital/ms-empresa/v1/listar-vagas';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private keyVacanciesStorage: string = 'vacancies';
  private keyCompanyStorage: string = 'companyVacancy';

  private businessId = 1;

  private vacanciesArray: Array<Vacancy> = []

  public async listVacancies(): Promise<Array<Vacancy>> {
    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem(this.keyVacanciesStorage);

    if (dataStorage && JSON.parse(dataStorage).length > 0) {
      try {
        return JSON.parse(dataStorage);
      } catch (error) {
        console.error("Erro ao analisar os dados armazenados.");
      }
    }

    try {
      const res = await lastValueFrom(this.getVacancies());
      this.vacanciesArray = [...res as Vacancy[]];
      
      sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(this.vacanciesArray));
    } catch (error) {
      this.vacanciesArray = []
      console.log('Erro ao processar a requisição da listagem de vagas');
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
        console.error("Erro ao analisar os dados armazenados");
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
      console.error('Erro ao atualizar vaga.');
    }
  }

  public async addNewVacancy() {
    try {
      const vacanciesArray: Array<Vacancy> = await this.listVacancies();
      sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(vacanciesArray));
    } catch (error) {
      console.error('Erro ao adicionar nova vaga.');
    }
  }

  public async deleteVacancy(id: number) {
    try {
      const vacanciesArray: Array<Vacancy> = await this.listVacancies();
      const index = vacanciesArray.findIndex(vacancy => vacancy.idVaga === id);

      if (index !== -1) {
        vacanciesArray.splice(index, 1);
        sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(vacanciesArray));
      }
    } catch (error) {
      console.error('Erro ao excluir vaga.');
    }
  }

  //modificar
  public insertVacancy(vacancy: Vacancy): number {
    vacancy.idVaga = (this.vacanciesArray.length + 1)
    console.log(this.listVacancies())

    const lastposition = this.vacanciesArray.push(vacancy);

    sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(this.vacanciesArray));
    sessionStorage.setItem(this.keyCompanyStorage, JSON.stringify(this.filterCompany()));
    return lastposition;
  }

  public listInterestedVacancies(id: number): Array<Vacancy> {
    return this.listCompanyVacancies().filter(e => e.idVaga === id)
  }

  public async listVacanciesByBusiness(id: number): Promise<Array<Vacancy>> {
    try {
      const allVacancies: Array<Vacancy> = await this.listVacancies();
      const vacanciesByBusiness: Array<Vacancy> = allVacancies.filter(vacancy => vacancy.idEmpresa === id);
      return vacanciesByBusiness;
    } catch (error) {
      console.error('Erro ao listar vagas por empresa');
      return [];
    }
  }

  public listVacanciesByLoggedBusiness() {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    return this.http.get('https://internal-gateway.efactor.digital/ms-empresa/v1/listar-vagas/usuario-empresa', { headers })
      .pipe(
        map(response => response)
      )
  }

  public assignInterest(id: number) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    return this.http.post<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/mostrar-interesse?id_vaga=' + id, { }, { headers })
      .pipe(
        map(response => response)
      )
  }

  public returnInterestedsByVacancy(id: number) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    return this.http.get('https://internal-gateway.efactor.digital/ms-empresa/v1/interessados-vaga?id_vaga=' + id, { headers })
      .pipe(
        map(response => response)
      )
  }

  desactivateVacancy(id: number) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    return this.http.delete<any>('https://internal-gateway.efactor.digital/ms-empresa/v1/desativar-vaga?id_vaga=' + id, { headers })
      .pipe(
        map(response => response)
      )
  }

  resetVacancys() {
    sessionStorage.removeItem(this.keyVacanciesStorage);
    sessionStorage.removeItem(this.keyCompanyStorage);
  }
}
