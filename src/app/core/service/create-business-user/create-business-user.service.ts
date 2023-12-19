import { Injectable } from '@angular/core';
import { BusinessUser } from '../../interfaces/business-user';

@Injectable({
  providedIn: 'root'
})
export class CreateBusinessUserService {

  constructor() { }

  public listBusinessUsers(): Array<BusinessUser> {

    console.log("entrei no serviço");

    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem('business-users');

    if (dataStorage) {
      console.log("Usando sessionStorage");

      return JSON.parse(dataStorage);
    }
  
    const businessUsersArray: Array<BusinessUser> = [
      {
        id: '1',
        businessId: '1',
        name: 'Fábio',
        email: 'fabio@email.com',
        password: '123456',
        cpf: '111.111.111-11',
        phone: '(11) 11111-1111',
        birthDate: '01-01-2000',
        creationDate: '01-01-2022',
      },
      {
        id: '2',
        businessId: '1',
        name: 'Wilson',
        email: 'wilson@email.com',
        password: '123456',
        cpf: '111.111.111-11',
        phone: '(11) 11111-1111',
        birthDate: '01-01-2000',
        creationDate: '02-01-2022',
      },
      {
        id: '3',
        businessId: '1',
        name: 'Victor',
        email: 'victor@email.com',
        password: '123456',
        cpf: '111.111.111-11',
        phone: '(11) 11111-1111',
        birthDate: '01-01-2000',
        creationDate: '03-01-2022',
      },
      {
        id: '4',
        businessId: '1',
        name: 'Ericris',
        email: 'ericris@email.com',
        password: '123456',
        cpf: '111.111.111-11',
        phone: '(11) 11111-1111',
        birthDate: '01-01-2000',
        creationDate: '04-01-2022',
      },
      {
        id: '5',
        businessId: '2',
        name: 'João',
        email: 'joao@email.com',
        password: '123456',
        cpf: '111.111.111-11',
        phone: '(11) 11111-1111',
        birthDate: '01-01-2000',
        creationDate: '01-01-2022',
      },
    ]

    sessionStorage.setItem('business-users', JSON.stringify(businessUsersArray));
    console.log("Usando requisição para API");

    return businessUsersArray;
  }

  createNewBusinessUser(businessUser: BusinessUser) {
    const businessUsersArray: Array<BusinessUser> = this.listBusinessUsers();
    businessUsersArray.push(businessUser);
    sessionStorage.setItem('business-users', JSON.stringify(businessUsersArray));
  }

  deleteBusinessUser(id: string) {
    const businessUsersArray: Array<BusinessUser> = this.listBusinessUsers();
    const index = businessUsersArray.findIndex(businessUser => businessUser.id === id);
    businessUsersArray.splice(index, 1);
    sessionStorage.setItem('business-users', JSON.stringify(businessUsersArray));
  }

  updateBusinessUser(updatedBusinessUser: BusinessUser) {
    const businessUsersArray: Array<BusinessUser> = this.listBusinessUsers();
    const index = businessUsersArray.findIndex(businessUser => businessUser.id === updatedBusinessUser.id);
  
    if (index !== -1) {
      businessUsersArray[index] = updatedBusinessUser;
      sessionStorage.setItem('business-users', JSON.stringify(businessUsersArray));
    }
  }

  getUsersByBusinessId(businessId: string) {
    const businessUsersArray: Array<BusinessUser> = this.listBusinessUsers();
    return businessUsersArray.filter(businessUser => businessUser.businessId === businessId);
  }
}
