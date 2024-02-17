// import 'src/proxy.js';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(email: string, password: string): Observable<string> {
    const body = {
      login: email,
      senha: password
    };
  
    return this.httpClient.post<any>('http://localhost:8085/auth/get-token', body)
      .pipe(
        map(response => response.token),
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
