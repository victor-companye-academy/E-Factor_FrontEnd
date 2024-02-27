import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterBusinessService {

  constructor(private httpClient: HttpClient) { }

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

    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-empresa/v1/cadastrar-empresa', body)
      .pipe(
        map(response => response)
      )
  }

  registerManager() {
    const storedResponseString = sessionStorage.getItem('businessRegistrationResponse');
    const storedResponse = JSON.parse(storedResponseString || '{}');

    this.managerInformations.idEmpresa = storedResponse.id;

    if (!this.managerInformations.idEmpresa) {
      return throwError('idEmpresa não pode ser 0 ou nulo.');
    }

    const body = this.managerInformations;

    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-empresa/v1/cadastrar-usuario/gestor-empresa', body)
      .pipe(
        map(response => response)
      )
  }
}
