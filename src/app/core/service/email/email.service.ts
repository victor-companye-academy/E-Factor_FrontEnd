import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  public recoverPassword(email: string) {
    const body = {
      emailTo: email
    }

    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-email/v1/recuperar-senha', body)
      .pipe(
        map((res: any) => res)
      )
  }

  public verifyCode(email: string, code: string) {
    const body = {
      email: email,
      codigo: code
    }

    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-email/v1/verificar-codigo', body)
      .pipe(
        map((res: any) => res)
      )
  }

  infoChangePassword = {
    email: '',
    novaSenha: '',
  }

  public changePassword() {
    const body = this.infoChangePassword

    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-email/v1/trocar-senha', body)
      .pipe(
        map((res: any) => res)
      )
  }
}
