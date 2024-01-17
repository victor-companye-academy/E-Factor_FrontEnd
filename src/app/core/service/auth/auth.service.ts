import { Injectable } from '@angular/core';
import * as jwt_decode from 'jsonwebtoken';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  private tokenKey = 'access_token';

  getToken(): string | null {
    return this.cookieService.get(this.tokenKey);
  }

  setToken(token: string): void {
    this.cookieService.set(this.tokenKey, token);
  }

  removeToken(): void {
    this.cookieService.delete(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    if (token) {
      try {
        // Verificar a assinatura e a expiração do token
        const decodedToken: any = jwt_decode.decode(token);
        const expirationDate = new Date(decodedToken.exp * 1000);

        return expirationDate > new Date();
      } catch (error) {
        // Tratar erros ao decodificar o token
        console.error('Erro ao decodificar o token:', error);
        return false;
      }
    }

    return false;
  }
}
