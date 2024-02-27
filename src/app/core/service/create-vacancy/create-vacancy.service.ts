import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { formattedDate } from 'src/app/core/utils/formattedDate';
import { RequestNewVacancy } from '../../interfaces/request-new-vacancy';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';
import { ResponseNewVacancy } from '../../interfaces/response-new-vacancy';
import { VacancyService } from '../vacancy/vacancy.service';
import { AuthService } from '../auth/auth.service';
import { SkillsService } from '../skills/skills.service';
import { BusinessService } from '../business/business.service';

@Injectable({
  providedIn: 'root'
})
export class CreateVacancyService {

  private url: string = 'https://internal-gateway.efactor.digital/ms-empresa/v1/cadastrar-vaga';

  constructor(private http: HttpClient, private vacancyService: VacancyService, private authService: AuthService, 
    private skillsService: SkillsService, businessService: BusinessService) {
  
    businessService.returnBusinessFromLoggedUser().subscribe(
      (res: any) => {
        this.businessInfo = res;
      }
    )
  }

  private static wasSendVacancy: boolean = false;

  private vacancy: any = {};
  private skillIds: number[] = [];

  public getWasSendVacancy(): boolean {
    return CreateVacancyService.wasSendVacancy;
  }

  public setWasSendVacancy(wasSend: boolean): void {
    CreateVacancyService.wasSendVacancy = wasSend;
  }

  protected businessInfo: any = {};

  public insertDescription(tituloVaga: string, descricaoVaga: string) {
    if (tituloVaga) {
      this.vacancy.tituloVaga = tituloVaga;
    }
    if (descricaoVaga) {
      this.vacancy.descricaoVaga = descricaoVaga;
    }
  }

  public insertDetails(habilidades: string[], senioridade: string, modalidade: string, tipoContrato: string, moreDetails: string) {
    this.vacancy.habilidades = habilidades;
    this.vacancy.senioridade = senioridade;
    this.vacancy.modalidade = modalidade;
    this.vacancy.tipoContrato = tipoContrato;
    this.vacancy.mostrarInteresse = [];
    this.vacancy.descricaoVaga = moreDetails + this.vacancy.descricaoVaga;
    this.vacancy.horaInclusao = formattedDate(new Date());
  }

  public getCreateVacancy(): RequestNewVacancy | any {
    if (this.vacancy) {
      const newVacancy: RequestNewVacancy = {
        titulo: this.vacancy.tituloVaga,
        descricao: this.vacancy.descricaoVaga,
        modalidade: this.vacancy.modalidade,
        tipoContrato: this.vacancy.tipoContrato,
        senioridade: this.vacancy.senioridade,
        habilidades: this.skillIds
      }
      return newVacancy
    }
  }

  public getVacancy(): Vacancy | any {
    if (this.vacancy) {

      const newVacancy: Vacancy = {
        idEmpresa: this.businessInfo.id,
        tituloVaga: this.vacancy.tituloVaga,
        ativo: true,
        senioridade: this.vacancy.senioridade,
        tipoContrato: this.vacancy.tipoContrato,
        modalidade: this.vacancy.modalidade,
        descricaoVaga: this.vacancy.descricaoVaga,
        habilidades: this.vacancy.habilidades,

        showedInterest: [],
        horaInclusao: this.vacancy.horaInclusao,
        fotoPerfil: this.businessInfo.fotoPerfil,
        fotoCapa: false,
        nomeEmpresa: this.businessInfo.nomeFantasia,
        endereco: this.businessInfo.endereco,
        email: this.businessInfo.contato.email,
        telefone: this.businessInfo.contato.telefone
      }
      return newVacancy
    }
  }


  public async createVacancy(): Promise<Observable<ResponseNewVacancy>> {
    await this.getSkillIds();

    let requestBody:RequestNewVacancy | undefined;

    if (this.skillIds && this.skillIds.length > 0) {
      requestBody = {
        titulo: this.vacancy.tituloVaga,
        descricao: this.vacancy.descricaoVaga,
        modalidade: this.vacancy.modalidade,
        tipoContrato: this.vacancy.tipoContrato,
        senioridade: this.vacancy.senioridade,
        habilidades: this.skillIds
      }
    }

    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    return new Observable(observer => {
      this.http.post<ResponseNewVacancy>(this.url, requestBody, { headers })
        .subscribe({
          next: (response: ResponseNewVacancy) => {
            observer.next(response);
            observer.complete();
          },
          error: (error: any) => {
            observer.error(error);
          }
        });
    });
  }

  async getSkillIds() {
    try {
      const res = await this.skillsService.getIdByName(this.vacancy.habilidades as string[]).toPromise();
      if (res) {
        this.skillIds = [...res];
      } else {
        console.log('Resposta vazia.');
      }
    } catch (error) {
      console.log('Erro ao obter id das habilidades');
    }
  }
}
