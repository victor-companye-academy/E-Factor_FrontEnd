import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { BusinessService } from '../business/business.service';
import { BusinessInfo } from '../../interfaces/business-info';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor() { }

  private keyVacanciesStorage: string = 'vacancies';
  private keyCompanyStorage: string = 'companyVacancy';

  private businessId = '1';

  private filterCompany(): Array<Vacancy> {
    return this.vacanciesArray.filter(company => company.businessId === this.businessId);
  }
  private vacanciesArray: Array<Vacancy> = [
    {
      id: '1',
      day: '11/12/2023',
      showedInterest: [],
      status: 'Ultimas vagas',
      businessId: '1',
      businessInfo: {
        id: "1",
        creationDate:'',
        photo: 'assets/imgs/bradesco-photo.png',
        name: 'Banco Bradesco S.A',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'bradesco@email.com',
        cellphone: '(11) 9912-4567',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo ipsum tempore illo. Perspiciatis eveniet, quasi architecto quidem suscipit odit! Assumenda asperiores facilis quam a consectetur blanditiis recusandae, laboriosam commodi ipsam optio deserunt quasi similique iure. Eveniet, doloribus? Tempora repudiandae in, veniam ab quasi voluptates alias quibusdam quia, fuga beatae quo, autem corrupti suscipit eius quis cum natus dolorum velit dicta accusamus explicabo! Quas rem dolorem perspiciatis consequuntur obcaecati quae esse? Sit hic voluptas minus in numquam alias odit corrupti, illo vel maxime doloremque unde optio ipsum placeat nihil velit natus non repellendus id, aliquam expedita. Dolorem, repellat a.',
        coins: 100,
      },
      title: "Desenvolvedor Java",
      description: "Lorem ipsum dolor sit amet consectetur. Tellus vitae viverra nascetur nulla vel nunc risus aliquam. Sodales sed tellus pretium egestas ac sed purus sed tempor. Mi eleifend metus a amet nunc volutpat egestas vulputate. Cras hac sit purus lacus aenean sed. Sed elit sed amet vel tortor tincidunt tellus sed. Scelerisque etiam risus nulla sed mattis neque. Nunc gravida gravida feugiat ac pellentesque adipiscing velit elementum vestibulum. Quis tristique mi at nulla nec. Vitae auctor feugiat diam varius nunc.\nAliquam massa quis gravida mauris praesent in pellentesque tortor placerat. Lacus at dapibus euismod mattis. Posuere dictumst arcu in pellentesque pulvinar. Nisi montes enim nunc feugiat quis arcu nunc posuere faucibus. Egestas dui facilisis pharetra nulla nunc.\nTincidunt elementum egestas lacus rhoncus ac. Sed scelerisque elementum fermentum purus massa senectus pellentesque sed. Posuere bibendum faucibus proin turpis tellus eleifend metus semper. Leo sed vulputate dui sed purus. Cursus ultricies morbi vel vel nibh. Bibendum ridiculus volutpat viverra diam ac massa egestas a. In sagittis eget risus dictum nisi senectus nec venenatis. Morbi lorem justo dignissim non sed varius a maecenas euismod. Augue ac quis magna nulla. Tellus ipsum sed lacus praesent id. Dui a ornare integer vivamus turpis. Mus purus venenatis vel quam convallis phasellus sagittis. Suscipit facilisi morbi lacus lacinia tincidunt.\nEnim cras mattis vitae felis consectetur elit. Consequat a pellentesque fusce tincidunt in molestie tristique vitae. Dis elit cras volutpat amet. Sit nunc eget id fermentum in. Morbi integer neque non in.\nUltricies eget ut semper in gravida. Et iaculis augue mi purus massa dis orci est. Enim neque mi cras volutpat imperdiet. Et platea aliquam volutpat orci sed diam turpis. Eu dictum suspendisse a phasellus. Cursus ut sed gravida venenatis fusce nec purus integer. Tristique elit viverra arcu sed adipiscing suscipit arcu elementum nibh. At feugiat arcu quis vulputate eu dapibus tempor nam sollicitudin. Vitae sagittis nibh id eu ultrices arcu nunc lectus.\nNibh at diam urna tortor volutpat vivamus lacus a. Quis ultrices risus nulla dictum justo id mauris semper faucibus. Ut et pharetra amet nibh justo. Cras ut risus sollicitudin in venenatis. Faucibus non volutpat nunc massa. ",
      skills: [
        "Angular",
        "HTML",
        "CSS",
        "JavaScript",
        "Scrum",
        "Spring Boot",
        "MySQL",
        "Java"
      ],
      serniority: "junior",
      vacancyArea: "front-end",
      modality: "hibrido",
      daysOfWeek: ['Seg,Qua,Sex'],
      contract: "pessoa juridica",
      period: "Integral",
      shift: "manha",
      createDate: '14/11/2023',
      expirationDate: '20/12/2023'
    },
    {
      id: '2',
      day: '11/12/2023',
      showedInterest: [],
      status: 'Ultimas vagas',
      businessId: '1',
      businessInfo: {
        id: "1",
        creationDate:'',
        photo: 'assets/imgs/bradesco-photo.png',
        name: 'Banco Bradesco S.A',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'bradesco@email.com',
        cellphone: '(11) 9912-4567',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo ipsum tempore illo. Perspiciatis eveniet, quasi architecto quidem suscipit odit! Assumenda asperiores facilis quam a consectetur blanditiis recusandae, laboriosam commodi ipsam optio deserunt quasi similique iure. Eveniet, doloribus? Tempora repudiandae in, veniam ab quasi voluptates alias quibusdam quia, fuga beatae quo, autem corrupti suscipit eius quis cum natus dolorum velit dicta accusamus explicabo! Quas rem dolorem perspiciatis consequuntur obcaecati quae esse? Sit hic voluptas minus in numquam alias odit corrupti, illo vel maxime doloremque unde optio ipsum placeat nihil velit natus non repellendus id, aliquam expedita. Dolorem, repellat a.',
        coins: 100,
      },
      title: "Desenvolvedor Web Junior",
      description: "Lorem ipsum dolor sit amet consectetur. Tellus vitae viverra nascetur nulla vel nunc risus aliquam. Sodales sed tellus pretium egestas ac sed purus sed tempor. Mi eleifend metus a amet nunc volutpat egestas vulputate. Cras hac sit purus lacus aenean sed. Sed elit sed amet vel tortor tincidunt tellus sed. Scelerisque etiam risus nulla sed mattis neque. Nunc gravida gravida feugiat ac pellentesque adipiscing velit elementum vestibulum. Quis tristique mi at nulla nec. Vitae auctor feugiat diam varius nunc.\nAliquam massa quis gravida mauris praesent in pellentesque tortor placerat. Lacus at dapibus euismod mattis. Posuere dictumst arcu in pellentesque pulvinar. Nisi montes enim nunc feugiat quis arcu nunc posuere faucibus. Egestas dui facilisis pharetra nulla nunc.\nTincidunt elementum egestas lacus rhoncus ac. Sed scelerisque elementum fermentum purus massa senectus pellentesque sed. Posuere bibendum faucibus proin turpis tellus eleifend metus semper. Leo sed vulputate dui sed purus. Cursus ultricies morbi vel vel nibh. Bibendum ridiculus volutpat viverra diam ac massa egestas a. In sagittis eget risus dictum nisi senectus nec venenatis. Morbi lorem justo dignissim non sed varius a maecenas euismod. Augue ac quis magna nulla. Tellus ipsum sed lacus praesent id. Dui a ornare integer vivamus turpis. Mus purus venenatis vel quam convallis phasellus sagittis. Suscipit facilisi morbi lacus lacinia tincidunt.\nEnim cras mattis vitae felis consectetur elit. Consequat a pellentesque fusce tincidunt in molestie tristique vitae. Dis elit cras volutpat amet. Sit nunc eget id fermentum in. Morbi integer neque non in.\nUltricies eget ut semper in gravida. Et iaculis augue mi purus massa dis orci est. Enim neque mi cras volutpat imperdiet. Et platea aliquam volutpat orci sed diam turpis. Eu dictum suspendisse a phasellus. Cursus ut sed gravida venenatis fusce nec purus integer. Tristique elit viverra arcu sed adipiscing suscipit arcu elementum nibh. At feugiat arcu quis vulputate eu dapibus tempor nam sollicitudin. Vitae sagittis nibh id eu ultrices arcu nunc lectus.\nNibh at diam urna tortor volutpat vivamus lacus a. Quis ultrices risus nulla dictum justo id mauris semper faucibus. Ut et pharetra amet nibh justo. Cras ut risus sollicitudin in venenatis. Faucibus non volutpat nunc massa. ",
      skills: [
        "Angular",
        "HTML",
        "CSS",
        "JavaScript",
        "Scrum",
        "Spring Boot",
        "MySQL",
        "Java"
      ],
      serniority: "junior",
      vacancyArea: "front-end",
      modality: "remoto",
      daysOfWeek: [],
      contract: "pessoa juridica",
      period: "Integral",
      shift: "manha",
      createDate: '10/12/2023',
      expirationDate: '20/12/2023'
    }
    , {
      id: '3',
      day: '11/12/2023',
      showedInterest: [],
      status: 'Ultimas vagas',
      businessId: '2',
      businessInfo: {
        id: "2",
        creationDate:'',
        photo: 'assets/imgs/bradesco-photo.png',
        name: 'Banco Bradesco S.A',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'bradesco@email.com',
        cellphone: '(11) 9912-4567',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo ipsum tempore illo. Perspiciatis eveniet, quasi architecto quidem suscipit odit! Assumenda asperiores facilis quam a consectetur blanditiis recusandae, laboriosam commodi ipsam optio deserunt quasi similique iure. Eveniet, doloribus? Tempora repudiandae in, veniam ab quasi voluptates alias quibusdam quia, fuga beatae quo, autem corrupti suscipit eius quis cum natus dolorum velit dicta accusamus explicabo! Quas rem dolorem perspiciatis consequuntur obcaecati quae esse? Sit hic voluptas minus in numquam alias odit corrupti, illo vel maxime doloremque unde optio ipsum placeat nihil velit natus non repellendus id, aliquam expedita. Dolorem, repellat a.',
        coins: 100,
      },
      title: "Desenvolvedor Java",
      description: "Lorem ipsum dolor sit amet consectetur. Tellus vitae viverra nascetur nulla vel nunc risus aliquam. Sodales sed tellus pretium egestas ac sed purus sed tempor. Mi eleifend metus a amet nunc volutpat egestas vulputate. Cras hac sit purus lacus aenean sed. Sed elit sed amet vel tortor tincidunt tellus sed. Scelerisque etiam risus nulla sed mattis neque. Nunc gravida gravida feugiat ac pellentesque adipiscing velit elementum vestibulum. Quis tristique mi at nulla nec. Vitae auctor feugiat diam varius nunc.\nAliquam massa quis gravida mauris praesent in pellentesque tortor placerat. Lacus at dapibus euismod mattis. Posuere dictumst arcu in pellentesque pulvinar. Nisi montes enim nunc feugiat quis arcu nunc posuere faucibus. Egestas dui facilisis pharetra nulla nunc.\nTincidunt elementum egestas lacus rhoncus ac. Sed scelerisque elementum fermentum purus massa senectus pellentesque sed. Posuere bibendum faucibus proin turpis tellus eleifend metus semper. Leo sed vulputate dui sed purus. Cursus ultricies morbi vel vel nibh. Bibendum ridiculus volutpat viverra diam ac massa egestas a. In sagittis eget risus dictum nisi senectus nec venenatis. Morbi lorem justo dignissim non sed varius a maecenas euismod. Augue ac quis magna nulla. Tellus ipsum sed lacus praesent id. Dui a ornare integer vivamus turpis. Mus purus venenatis vel quam convallis phasellus sagittis. Suscipit facilisi morbi lacus lacinia tincidunt.\nEnim cras mattis vitae felis consectetur elit. Consequat a pellentesque fusce tincidunt in molestie tristique vitae. Dis elit cras volutpat amet. Sit nunc eget id fermentum in. Morbi integer neque non in.\nUltricies eget ut semper in gravida. Et iaculis augue mi purus massa dis orci est. Enim neque mi cras volutpat imperdiet. Et platea aliquam volutpat orci sed diam turpis. Eu dictum suspendisse a phasellus. Cursus ut sed gravida venenatis fusce nec purus integer. Tristique elit viverra arcu sed adipiscing suscipit arcu elementum nibh. At feugiat arcu quis vulputate eu dapibus tempor nam sollicitudin. Vitae sagittis nibh id eu ultrices arcu nunc lectus.\nNibh at diam urna tortor volutpat vivamus lacus a. Quis ultrices risus nulla dictum justo id mauris semper faucibus. Ut et pharetra amet nibh justo. Cras ut risus sollicitudin in venenatis. Faucibus non volutpat nunc massa. ",
      skills: [
        "Angular",
        "HTML",
        "CSS",
        "JavaScript",
        "Scrum",
        "Spring Boot",
        "MySQL",
        "Java"
      ],
      serniority: "junior",
      vacancyArea: "front-end",
      modality: "hibrido",
      daysOfWeek: ['Seg,Qua,Sex'],
      contract: "pessoa juridica",
      period: "Integral",
      shift: "manha",
      createDate: '14/11/2023',
      expirationDate: '20/12/2023'
    },
    {
      id: '4',
      day: '11/12/2023',
      showedInterest: [],
      status: 'Ultimas vagas',
      businessId: '2',
      businessInfo: {
        id: "2",
        creationDate:'',
        photo: 'assets/imgs/bradesco-photo.png',
        name: 'Banco Bradesco S.A',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'bradesco@email.com',
        cellphone: '(11) 9912-4567',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo ipsum tempore illo. Perspiciatis eveniet, quasi architecto quidem suscipit odit! Assumenda asperiores facilis quam a consectetur blanditiis recusandae, laboriosam commodi ipsam optio deserunt quasi similique iure. Eveniet, doloribus? Tempora repudiandae in, veniam ab quasi voluptates alias quibusdam quia, fuga beatae quo, autem corrupti suscipit eius quis cum natus dolorum velit dicta accusamus explicabo! Quas rem dolorem perspiciatis consequuntur obcaecati quae esse? Sit hic voluptas minus in numquam alias odit corrupti, illo vel maxime doloremque unde optio ipsum placeat nihil velit natus non repellendus id, aliquam expedita. Dolorem, repellat a.',
        coins: 100,
      },
      title: "Desenvolvedor Web Junior",
      description: "Lorem ipsum dolor sit amet consectetur. Tellus vitae viverra nascetur nulla vel nunc risus aliquam. Sodales sed tellus pretium egestas ac sed purus sed tempor. Mi eleifend metus a amet nunc volutpat egestas vulputate. Cras hac sit purus lacus aenean sed. Sed elit sed amet vel tortor tincidunt tellus sed. Scelerisque etiam risus nulla sed mattis neque. Nunc gravida gravida feugiat ac pellentesque adipiscing velit elementum vestibulum. Quis tristique mi at nulla nec. Vitae auctor feugiat diam varius nunc.\nAliquam massa quis gravida mauris praesent in pellentesque tortor placerat. Lacus at dapibus euismod mattis. Posuere dictumst arcu in pellentesque pulvinar. Nisi montes enim nunc feugiat quis arcu nunc posuere faucibus. Egestas dui facilisis pharetra nulla nunc.\nTincidunt elementum egestas lacus rhoncus ac. Sed scelerisque elementum fermentum purus massa senectus pellentesque sed. Posuere bibendum faucibus proin turpis tellus eleifend metus semper. Leo sed vulputate dui sed purus. Cursus ultricies morbi vel vel nibh. Bibendum ridiculus volutpat viverra diam ac massa egestas a. In sagittis eget risus dictum nisi senectus nec venenatis. Morbi lorem justo dignissim non sed varius a maecenas euismod. Augue ac quis magna nulla. Tellus ipsum sed lacus praesent id. Dui a ornare integer vivamus turpis. Mus purus venenatis vel quam convallis phasellus sagittis. Suscipit facilisi morbi lacus lacinia tincidunt.\nEnim cras mattis vitae felis consectetur elit. Consequat a pellentesque fusce tincidunt in molestie tristique vitae. Dis elit cras volutpat amet. Sit nunc eget id fermentum in. Morbi integer neque non in.\nUltricies eget ut semper in gravida. Et iaculis augue mi purus massa dis orci est. Enim neque mi cras volutpat imperdiet. Et platea aliquam volutpat orci sed diam turpis. Eu dictum suspendisse a phasellus. Cursus ut sed gravida venenatis fusce nec purus integer. Tristique elit viverra arcu sed adipiscing suscipit arcu elementum nibh. At feugiat arcu quis vulputate eu dapibus tempor nam sollicitudin. Vitae sagittis nibh id eu ultrices arcu nunc lectus.\nNibh at diam urna tortor volutpat vivamus lacus a. Quis ultrices risus nulla dictum justo id mauris semper faucibus. Ut et pharetra amet nibh justo. Cras ut risus sollicitudin in venenatis. Faucibus non volutpat nunc massa. ",
      skills: [
        "Angular",
        "HTML",
        "CSS",
        "JavaScript",
        "Scrum",
        "Spring Boot",
        "MySQL",
        "Java"
      ],
      serniority: "junior",
      vacancyArea: "front-end",
      modality: "remoto",
      daysOfWeek: [],
      contract: "pessoa juridica",
      period: "Integral",
      shift: "manha",
      createDate: '10/12/2023',
      expirationDate: '20/12/2023'
    }
  ];

  public listVacancies(): Array<Vacancy> {
    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem(this.keyVacanciesStorage);

    if (dataStorage) {
      console.log("Usando sessionStorage");

      return JSON.parse(dataStorage);
    }
    sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(this.vacanciesArray));
    console.log("Usando requisição para API");

    return this.vacanciesArray;
  }

  public listCompanyVacancies(): Array<Vacancy> {
    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem(this.keyCompanyStorage);

    if (dataStorage) {
      console.log("Usando sessionStorage");

      return JSON.parse(dataStorage);
    }

    const companyVacancies = this.filterCompany();

    sessionStorage.setItem(this.keyCompanyStorage, JSON.stringify(companyVacancies));
    console.log("Usando requisição para API");

    return companyVacancies;

  }

  public updateVacancys(updatedVacancy: any) {
    const vacanciesArray: Array<Vacancy> = this.listVacancies();
    const index = vacanciesArray.findIndex(vacancy => vacancy.id === vacancy.id);

    if (index !== -1) {
      vacanciesArray[index] = updatedVacancy;
      sessionStorage.setItem('vacancies', JSON.stringify(vacanciesArray));
    }
  }

  public addNewVacancy(newVacancy: any) {
    const vacanciesArray: Array<Vacancy> = this.listVacancies();
    vacanciesArray.push(newVacancy);
    sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(vacanciesArray));
  }

  public deleteVacancy(id: string) {
    const vacanciesArray: Array<Vacancy> = this.listVacancies();
    const index = vacanciesArray.findIndex(vacancy => vacancy.id === id);
    vacanciesArray.splice(index, 1);
    sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(vacanciesArray));
  }

  public insertVacancy(vacancy: Vacancy): number {
    vacancy.id = (this.vacanciesArray.length + 1).toString()
    console.log(this.listVacancies())

    const lastposition = this.vacanciesArray.push(vacancy);

    sessionStorage.setItem(this.keyVacanciesStorage, JSON.stringify(this.vacanciesArray));
    sessionStorage.setItem(this.keyCompanyStorage, JSON.stringify(this.filterCompany()));
    return lastposition;
  }

  public listInterestedVacancies(id: string): Array<Vacancy> {
    return this.listVacancies().filter(e => e.showedInterest.includes(id));
  }

  public listVacanciesByBusiness(id: string): Array<Vacancy> {
    return this.listVacancies().filter(e => e.businessId === id);
  }
}
