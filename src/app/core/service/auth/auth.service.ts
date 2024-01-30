import { Injectable } from '@angular/core';
import * as jwt_decode from 'jsonwebtoken';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) {}

  private tokenKey = 'access_token';

  getToken(): string | null {
    return this.cookieService.get(this.tokenKey);
  }

  setToken(token: string): void {
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 2);

    this.cookieService.set(this.tokenKey, token, expirationDate, '/');
  }

  removeToken(): void {
    this.cookieService.delete(this.tokenKey, '/');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    if (token) {
      try {
        const decodedToken: any = jwt_decode.decode(token);
        const expirationDate = new Date(decodedToken.exp * 1000);

        return expirationDate > new Date();
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        return false;
      }
    }

    return false;
  }

  getRole() {
    if (this.isAuthenticated()) {
      const token = this.getToken();
      const decodedToken: any = jwt_decode.decode(token!);
      return decodedToken['x-role'];
    }
    return "undefined";
  }

  getId() {
    if (this.isAuthenticated()) {
      const token = this.getToken();
      const decodedToken: any = jwt_decode.decode(token!);
      return decodedToken['sub'];
    }
    return "undefined";
  }
}
