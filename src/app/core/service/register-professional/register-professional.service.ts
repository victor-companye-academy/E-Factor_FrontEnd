import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterProfessionalService {

  constructor(private httpClient: HttpClient, private authService: AuthService, private loginService: LoginService) { }

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
  public executeRegister(): Observable<any> {
    return this.registerProfessional().pipe(
      switchMap(response => {
        return this.loginService.login(this.professionalInformations.login, this.professionalInformations.senha);
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }
  
  public registerProfessional(): Observable<any> {
    const body = this.professionalInformations;
  
    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/cadastrar-profissional', body)
      .pipe(
        map(response => response),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  public registerCurriculum(id: number) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    }

    const body = {
      id: id
    }

    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/curriculos', body, { headers })
      .pipe(
        map(response => response)
      )
  }
}
