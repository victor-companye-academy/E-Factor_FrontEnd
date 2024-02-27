import { Injectable } from '@angular/core';
import { BusinessInfo } from '../../interfaces/business-info';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public listBusiness(): Array<BusinessInfo> {

    console.log("entrei no serviço");

    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem('businesses');

    if (dataStorage) {
      console.log("Usando sessionStorage");

      return JSON.parse(dataStorage);
    }

    const businessArray: Array<BusinessInfo> = [{
      id: "1",
      photo: 'assets/imgs/bradesco-photo.png',
      name: 'Banco Bradesco S.A',
      city: 'São Paulo',
      state: 'São Paulo',
      email: 'bradesco@email.com',
      cellphone: '(11) 9912-4567',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo ipsum tempore illo. Perspiciatis eveniet, quasi architecto quidem suscipit odit! Assumenda asperiores facilis quam a consectetur blanditiis recusandae, laboriosam commodi ipsam optio deserunt quasi similique iure. Eveniet, doloribus? Tempora repudiandae in, veniam ab quasi voluptates alias quibusdam quia, fuga beatae quo, autem corrupti suscipit eius quis cum natus dolorum velit dicta accusamus explicabo! Quas rem dolorem perspiciatis consequuntur obcaecati quae esse? Sit hic voluptas minus in numquam alias odit corrupti, illo vel maxime doloremque unde optio ipsum placeat nihil velit natus non repellendus id, aliquam expedita. Dolorem, repellat a.',
      coins: 100,
      creationDate: '01-01-2022',
    },
    {
      id: "2",
      photo: '',
      name: 'Banco Inter S.A',
      city: 'São Paulo',
      state: 'São Paulo',
      email: 'inter@email.com',
      cellphone: '(11) 9912-4567',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo ipsum tempore illo. Perspiciatis eveniet, quasi architecto quidem suscipit odit! Assumenda asperiores facilis quam a consectetur blanditiis recusandae, laboriosam commodi ipsam optio deserunt quasi similique iure. Eveniet, doloribus? Tempora repudiandae in, veniam ab quasi voluptates alias quibusdam quia, fuga beatae quo, autem corrupti suscipit eius quis cum natus dolorum velit dicta accusamus explicabo! Quas rem dolorem perspiciatis consequuntur obcaecati quae esse? Sit hic voluptas minus in numquam alias odit corrupti, illo vel maxime doloremque unde optio ipsum placeat nihil velit natus non repellendus id, aliquam expedita. Dolorem, repellat a.',
      coins: 100,
      creationDate: '01-01-2021',
    },
    {
      id: "3",
      photo: '',
      name: 'Banco Nubank S.A',
      city: 'São Paulo',
      state: 'São Paulo',
      email: 'nubank@email.com',
      cellphone: '(11) 9912-4567',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo ipsum tempore illo. Perspiciatis eveniet, quasi architecto quidem suscipit odit! Assumenda asperiores facilis quam a consectetur blanditiis recusandae, laboriosam commodi ipsam optio deserunt quasi similique iure. Eveniet, doloribus? Tempora repudiandae in, veniam ab quasi voluptates alias quibusdam quia, fuga beatae quo, autem corrupti suscipit eius quis cum natus dolorum velit dicta accusamus explicabo! Quas rem dolorem perspiciatis consequuntur obcaecati quae esse? Sit hic voluptas minus in numquam alias odit corrupti, illo vel maxime doloremque unde optio ipsum placeat nihil velit natus non repellendus id, aliquam expedita. Dolorem, repellat a.',
      coins: 100,
      creationDate: '01-01-2020',
    },
    {
      id: "4",
      photo: '',
      name: 'Banco Next S.A',
      city: 'São Paulo',
      state: 'São Paulo',
      email: 'next@email.com',
      cellphone: '(11) 9912-4567',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo ipsum tempore illo. Perspiciatis eveniet, quasi architecto quidem suscipit odit! Assumenda asperiores facilis quam a consectetur blanditiis recusandae, laboriosam commodi ipsam optio deserunt quasi similique iure. Eveniet, doloribus? Tempora repudiandae in, veniam ab quasi voluptates alias quibusdam quia, fuga beatae quo, autem corrupti suscipit eius quis cum natus dolorum velit dicta accusamus explicabo! Quas rem dolorem perspiciatis consequuntur obcaecati quae esse? Sit hic voluptas minus in numquam alias odit corrupti, illo vel maxime doloremque unde optio ipsum placeat nihil velit natus non repellendus id, aliquam expedita. Dolorem, repellat a.',
      coins: 100,
      creationDate: '12-17-2023',
    },
    ];

    sessionStorage.setItem('businesses', JSON.stringify(businessArray));
    console.log("Usando requisição para API");

    return businessArray;
  }

  public updateBusiness(updatedBusiness: any) {
    const businessArray: Array<BusinessInfo> = this.listBusiness();
    const index = businessArray.findIndex(business => business.id === updatedBusiness.id);

    if (index !== -1) {
      businessArray[index] = updatedBusiness;
      sessionStorage.setItem('businesses', JSON.stringify(businessArray));
    }
  }

  public returnBusinessFromLoggedUser() {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    return this.httpClient.get('https://internal-gateway.efactor.digital/ms-empresa/v1/empresa-logado', { headers })
      .pipe(
        map(response => response)
      );
  }

  public returnBusinessById(id: number) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    return this.httpClient.get('https://internal-gateway.efactor.digital/ms-empresa/v1/detalhe-empresa?id_empresa=' + id, { headers })
      .pipe(
        map(response => response)
      );
  }

  public returnBusiness() {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    return this.httpClient.get('https://internal-gateway.efactor.digital/ms-empresa/v1/listar-empresas', { headers })
      .pipe(
        map(response => response)
      );
  }

  public consultarSaldoCoin() {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    return this.httpClient.get('https://internal-gateway.efactor.digital/ms-empresa/v1/consultar-saldo', { headers })
      .pipe(
        map(response => response)
      );
  }

  public requestVoucher(quantity: number): Observable<any> {
    const url = 'https://internal-gateway.efactor.digital/ms-empresa/v1/solicitar-voucher';

    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };
    const requestBody = {
      "qtdCoin": quantity
    }

    return this.httpClient.post<any>(url, requestBody, { headers })
      .pipe(
        res => res,
        error => error
      );
  }

  public updateBusinessData(objEmpresa: any) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    const objEmpresaAtualizado = {
      razaoSocial: objEmpresa.razaoSocial,
      nomeFantasia: objEmpresa.nomeFantasia,
      fotoPerfil: objEmpresa.fotoPerfil,
      sobre: objEmpresa.sobre,
      contato: {
        email: objEmpresa.contato.email,
        telefone: objEmpresa.contato.telefone
      },
      endereco: {
        cep: objEmpresa.endereco.cep,
        logradouro: objEmpresa.endereco.logradouro,
        numero: objEmpresa.endereco.numero,
        complemento: objEmpresa.endereco.complemento,
        bairro: objEmpresa.endereco.bairro,
        cidade: objEmpresa.endereco.cidade,
        estado: objEmpresa.endereco.estado
      }
    }

    const body = objEmpresaAtualizado;

    return this.httpClient.put<any>('https://internal-gateway.efactor.digital/ms-empresa/v1/atualizar-empresa', body, { headers })
      .pipe(
        map(response => response)
      );
  }

  public returnNotifications() {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    return this.httpClient.get('https://internal-gateway.efactor.digital/ms-empresa/v1/notificacao-vaga', { headers })
      .pipe(
        map(response => response)
      );
  }

  public confirmNotification(vancancyVisualized: number) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };


    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-empresa/v1/confirmar-notificacao?id_vaga=' + vancancyVisualized, {}, { headers })
      .pipe(
        map(response => response)
      );
  }
}
