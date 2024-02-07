import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterProfessionalService {

  constructor(private httpClient: HttpClient) { }

  professionalInformations = {
    login: "",
    senha: "",
    nomeCompleto: "",
    dataNascimento: "",
    cpf: "",
    descricaoPessoal: "",
    nivel: "",
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

  registerProfessional() {
    const body = this.professionalInformations;

    return this.httpClient.post<any>('http://localhost:8085/ms-profissional/v1/cadastrar-profissional', body)
      .pipe(
        map(response => response)
      )
  }
}
