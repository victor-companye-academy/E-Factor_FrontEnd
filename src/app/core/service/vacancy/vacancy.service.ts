import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { BusinessService } from '../business/business.service';
import { BusinessInfo } from '../../interfaces/business-info';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor() { }

  private keyStorage: string = 'vacancies'

  private vacanciesArray: Array<Vacancy> = [
    {
      id: '1',
      days: '11/12/2023',
      showedInterest: [],
      status: 'Ultimas vagas',
      businessId: '1',
      businessInfo: {
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
      modality: "remoto",
      daysOfWeek: [],
      contract: "pessoa juridica",
      period: "Remoto",
      shift: "manha",
    },
    {
      id: '2',
      days: '11/12/2023',
      showedInterest: [],
      status: 'Ultimas vagas',
      businessId: '1',
      businessInfo: {
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
      period: "Remoto",
      shift: "manha",
    }
  ];

  public listVacancies(): Array<Vacancy> {
    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem(this.keyStorage);

    if (dataStorage) {
      try {
        console.log("Usando sessionStorage");
        return JSON.parse(dataStorage);
      } catch (error) {
        console.error("Erro ao analisar os dados armazenados:", error);
      }
    }

    sessionStorage.setItem(this.keyStorage, JSON.stringify(this.vacanciesArray));
    console.log("Usando requisição para API");

    return this.vacanciesArray;

  }

  insertVacancy(vacancy: Vacancy): number {
    vacancy.id = (this.vacanciesArray.length + 1).toString()
    console.log(this.listVacancies())

    const lastposition = this.vacanciesArray.push(vacancy);

    sessionStorage.setItem(this.keyStorage, JSON.stringify(this.vacanciesArray));
    return lastposition;
  }

  listInterestedVacancies(id: string): Array<Vacancy> {
    return this.listVacancies().filter(e => e.showedInterest.includes(id));
  }

  listVacanciesByBusiness(id: string): Array<Vacancy> {
    console.log(this.listVacancies().filter(e => e.businessId === id))
    return this.listVacancies().filter(e => e.businessId === id);
  }
}
