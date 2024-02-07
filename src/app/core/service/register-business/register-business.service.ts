import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterBusinessService {

  constructor(private httpClient: HttpClient) { }

  response: any = {};

  businessInformations = {
    razaoSocial: "",
    nomeFantasia: "",
    cnpj: "",
    inscricaoEstadual: "",
    sobre: "",
    contato: {
      email: "",
      telefone: "",
    },
    endereco: {
      logradouro: "",
      numero: 0,
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "",
    }
  }

  managerInformations = {
    email: "",
    cpf: "",
    senha: "",
    nome: "",
    dataNascimento: "",
    idEmpresa: 0
  }

  registerBusiness() {
    const body = this.businessInformations;

    return this.httpClient.post<any>('http://localhost:8085/ms-empresa/v1/cadastrar-empresa', body)
      .pipe(
        map(response => response)
      )
  }

  registerManager() {
    this.managerInformations.idEmpresa = this.response.idEmpresa;
    const body = this.managerInformations;

    return this.httpClient.post<any>('http://localhost:8085/ms-empresa/v1/cadastrar-usuario/gestor-empresa', body)
      .pipe(
        map(response => response)
      )
  }
}
