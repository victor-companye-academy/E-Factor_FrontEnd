import { Injectable } from '@angular/core';
import { BusinessInfo } from '../../interfaces/business-info';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor() { }

  public listBusiness():Array<BusinessInfo> {

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
}
