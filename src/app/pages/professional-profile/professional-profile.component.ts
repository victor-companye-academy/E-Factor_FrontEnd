import { Component } from '@angular/core';
import { CardVacancy } from 'src/app/core/interfaces/card-vacancy';
import { ProfessionalInfo } from 'src/app/core/interfaces/professional-info';
import { CardVacancyService } from 'src/app/core/service/cardVacancy/card-vacancy.service';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.scss']
})
export class ProfessionalProfileComponent {

  protected isLogged: boolean = true;
  protected showCellphone = true;

  constructor (private cardVacancyService: CardVacancyService) {}

  protected cardVacancy: Array<CardVacancy> = this.cardVacancyService.listVacancies();

  protected professionalInfo: Array<ProfessionalInfo> = [
    {
      id: "1",
      photo: '',
      name: 'Wilson Snowden O. Junior',
      age: '23',
      city: 'São Paulo',
      state: 'São Paulo',
      email: 'wilson@email.com',
      cellphone: '(11) 99123-4567',
      seniority: 'Sênior',
      about: 'Meu nome é Wilson Snowden Oliveira Junior e sou um profissional da área de tecnologia com formação no Instituto Federal de Ciência e Tecnologia de São Paulo, onde cursei o Técnico Integrado em Informática. Atualmente, moro na cidade de São Paulo, São Paulo, e ocupo a posição de Desenvolvedor III na Cogna, uma posição que reflete meu crescimento e experiência ao longo dos anos. Minha jornada na programação começou em 2017, quando decidi ingressar nesse ramo. Em abril de 2017, tive a oportunidade de dar meus primeiros passos no mercado de trabalho como Jovem Aprendiz de Programação. Em janeiro de 2018, a empresa decidiu me efetivar, promovendo-me ao cargo de Analista de Desenvolvimento e Criação. Nesse papel, fiquei responsável pelo desenvolvimento do Front-End de softwares, uma tarefa que exigia o desenvolvimento de software e criação de prototipagem de alta fidelidade. Desde então, tenho continuamente buscado aprimorar minhas habilidades e conhecimentos. Minha jornada na programação tem sido uma evolução constante, impulsionada por minha paixão por resolver problemas e criar soluções inovadoras. Estou ansioso para enfrentar novos desafios e contribuir para projetos cada vez mais complexos e impactantes na Cogna e na indústria de tecnologia como um todo.',
      experience: [
        { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis. Quis quis mattis amet suspendisse dictum turpis egestas amet. Morbi scelerisque sit lectus arcu vulputate. Et lacinia ut at vitae platea suspendisse sed volutpat. Nibh aliquet morbi egestas iaculis fames interdum hendrerit. Feugiat vitae fames rhoncus eget. Dictumst sit elit turpis amet suspendisse natoque placerat. Placerat turpis sed vitae dolor. Imperdiet cras.' },
        { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis. Quis quis mattis amet suspendisse dictum turpis egestas amet. Morbi scelerisque sit lectus arcu vulputate.' },
        { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
      ],
      education: [
        { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis. Quis quis mattis amet suspendisse dictum turpis egestas amet. Morbi scelerisque sit lectus arcu vulputate. Et lacinia ut at vitae platea suspendisse sed volutpat. Nibh aliquet morbi egestas iaculis fames interdum hendrerit.' }
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
      languages: [{ language: 'Português - BR', level: 'Nativo'}, { language: 'Inglês', level: 'Básico'}],
    }
  ];

  protected isEditInfoModalOpen = false;
  protected isEditAboutModalOpen = false;
  protected isEditExperienceModalOpen = false;
  protected isEditEducationModalOpen = false;
  protected isEditSkillsModalOpen = false;
  protected isEditLanguagesModalOpen = false;
  protected modalIndex: number = -1;

  openEditModal(index: number) {
    switch (index) {
      case 0:
        this.modalIndex = 0;
        this.isEditInfoModalOpen = true;
        break;
      case 1:
        this.modalIndex = 1;
        this.isEditAboutModalOpen = true;
        break;
      case 2:
        this.modalIndex = 2;
        this.isEditExperienceModalOpen = true;
        break;
      case 3:
        this.modalIndex = 3;
        this.isEditEducationModalOpen = true;
        break;
      case 4:
        this.modalIndex = 4;
        this.isEditSkillsModalOpen = true;
        break;
      case 5:
        this.modalIndex = 5;
        this.isEditLanguagesModalOpen = true;
        break;
    }
  }

  closeEditModal() {
    this.isEditInfoModalOpen = false;
    this.isEditAboutModalOpen = false;
    this.isEditExperienceModalOpen = false;
    this.isEditEducationModalOpen = false;
    this.isEditSkillsModalOpen = false;
    this.isEditLanguagesModalOpen = false;
  }

  saveProfileChanges(updatedProfile: any) {
    switch (this.modalIndex) {
      case 0:
        this.professionalInfo[0] = updatedProfile;
        break;
      case 1:
        this.professionalInfo[0].about = updatedProfile;
        break;
      case 2:
        this.professionalInfo[0].experience = updatedProfile;
        break;
      case 3:
        this.professionalInfo[0].education = updatedProfile;
        break;
      case 4:
        this.professionalInfo[0].skills = updatedProfile;
        break;
      case 5:
        this.professionalInfo[0].languages = updatedProfile;
        break;
    }
    this.modalIndex = -1;
    
    console.log('Perfil Atualizado:', updatedProfile);

    this.closeEditModal();
  }

  getDate(date: string) {
    const formattedDate = new Date(date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
}
