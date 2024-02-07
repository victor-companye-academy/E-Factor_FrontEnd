// import 'src/proxy.js';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    const body = {
      login: email,
      senha: password
    };

    return this.httpClient.post<any>('http://localhost:8085/auth/get-token', body)
      .pipe(
        map(response => response.token)
      );
  }
}
