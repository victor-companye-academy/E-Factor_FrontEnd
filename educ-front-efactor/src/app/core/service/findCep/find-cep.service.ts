import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindCepService {

  constructor(private httpCLient: HttpClient) { }

  getAddressByCep(cep: string) {
    return this.httpCLient.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
