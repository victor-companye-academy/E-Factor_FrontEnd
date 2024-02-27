import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessUserService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public listBusinessUsers() {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    }
    
    return this.httpClient.get('https://internal-gateway.efactor.digital/ms-empresa/v1/listar-gestores', { headers })
      .pipe(
        map(response => response)
      );
  }

  public updateBusinessUser(id: number, userObj: any) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    }
    const body = userObj;

    return this.httpClient.put<any>('https://internal-gateway.efactor.digital/ms-empresa/v1/atualizar-gestor?id_gestor=' + id, body, { headers })
      .pipe(
        map(response => response)
      );
  }

  public desativateBusinessUser(id: number) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    }
    
    return this.httpClient.delete('https://internal-gateway.efactor.digital/ms-empresa/v1/desativar-gestor?id_gestor=' + id, { headers })
      .pipe(
        map(response => response)
      );
  }
}
