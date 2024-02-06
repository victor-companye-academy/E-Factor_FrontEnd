import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { VacancyService } from '../vacancy/vacancy.service';
import { Router } from '@angular/router';
import { formattedDate } from 'src/app/core/utils/formattedDate';
import { NewVacancy } from '../../interfaces/new-vacancy';

@Injectable({
  providedIn: 'root'
})
export class CreateVacancyService {

  constructor(private vacancyService: VacancyService, private router: Router) {
  }
  private static wasSendVacancy: boolean = false;

  private vacancy: any = {};

  public getWasSendVacancy(): boolean {
    return CreateVacancyService.wasSendVacancy;
  }

  public setWasSendVacancy(wasSend: boolean): void {
    CreateVacancyService.wasSendVacancy = wasSend;
  }

  //Temporário, será recuperado essa informacao da autenticação
  protected businessInfo: any = {
    id: 1,
    razaoSocial: "Alphabet Inc",
    nomeFantasia: "Google Inc",
    cnpj: "97111170000185",
    inscricaoEstadual: "639990958429",
    contato: {
      id: 2,
      email: "google@email.com",
      telefone: "(92)994117559"
    },
    endereco: {
      id: 2,
      logradouro: "string",
      numero: 0,
      complemento: "string",
      bairro: "string",
      cidade: "string",
      estado: "São Paulo",
      cep: "69086140"
    },
    fotoPerfil: "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",
    fotoCapa: null,
    sobre: "Google LLC é uma empresa multinacional de softwares e serviços online fundada em 1998 na cidade norte-americana de Menlo Park, que lucra principalmente através da publicidade pelo AdWords. A Google é a principal subsidiária da Alphabet Inc."

  }

  public insertDescription(tituloVaga: string, descricaoVaga: string) {
    this.vacancy.tituloVaga = tituloVaga;
    this.vacancy.descricaoVaga = descricaoVaga;

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

  public getCreateVacancy(): Vacancy | any {
    if (this.vacancy) {

      const newVacancy: NewVacancy = {
        titulo: this.vacancy.tituloVaga,
        descricao: this.vacancy.descricaoVaga,
        modalidade: this.vacancy.modalidade,
        tipoContrato: this.vacancy.tipoContrato,
        senioridade: this.vacancy.senioridade,
        habilidades: this.vacancy.habilidades
      }
      return newVacancy
    }
  }

  public getVacancy(): Vacancy | any {
    if (this.vacancy) {

      const newVacancy: any = {
        titulo: this.vacancy.tituloVaga,
        descricao: this.vacancy.descricaoVaga,
        modalidade: this.vacancy.modalidade,
        tipoContrato: this.vacancy.tipoContrato,
        senioridade: this.vacancy.senioridade,
        habilidades: this.vacancy.habilidades
      }
      return newVacancy
    }
  }

  public createVacancy() {
    CreateVacancyService.wasSendVacancy = true;

    this.businessInfo.coins -= 1;

    this.vacancyService.insertVacancy(this.vacancy)

    this.vacancy = {}
  }
}
