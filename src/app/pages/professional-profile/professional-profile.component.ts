import { Component } from '@angular/core';
import { ProfessionalInfo } from 'src/app/core/interfaces/professional-info';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.scss']
})
export class ProfessionalProfileComponent {

  protected isLogged: boolean = true;

  protected professionalInfo: Array<ProfessionalInfo> = [
    {
      id: "1",
      photo: '',
      name: 'Wilson Snowden O. Junior',
      age: '23',
      city: 'São Paulo',
      state: 'Sao Paulo',
      email: 'wilson@email.com',
      cellphone: '(11) 99123-4567',
      seniority: 'Sênior',
      about: 'Meu nome é Wilson Snowden Oliveira Junior e sou um profissional da área de tecnologia com formação no Instituto Federal de Ciência e Tecnologia de São Paulo, onde cursei o Técnico Integrado em Informática. Atualmente, moro na cidade de São Paulo, São Paulo, e ocupo a posição de Desenvolvedor III na Cogna, uma posição que reflete meu crescimento e experiência ao longo dos anos. Minha jornada na programação começou em 2017, quando decidi ingressar nesse ramo. Em abril de 2017, tive a oportunidade de dar meus primeiros passos no mercado de trabalho como Jovem Aprendiz de Programação. Em janeiro de 2018, a empresa decidiu me efetivar, promovendo-me ao cargo de Analista de Desenvolvimento e Criação. Nesse papel, fiquei responsável pelo desenvolvimento do Front-End de softwares, uma tarefa que exigia o desenvolvimento de software e criação de prototipagem de alta fidelidade. Desde então, tenho continuamente buscado aprimorar minhas habilidades e conhecimentos. Minha jornada na programação tem sido uma evolução constante, impulsionada por minha paixão por resolver problemas e criar soluções inovadoras. Estou ansioso para enfrentar novos desafios e contribuir para projetos cada vez mais complexos e impactantes na Cogna e na indústria de tecnologia como um todo.',
      experience: [
        { institution: 'Cogna Educação', start: 'Jan 2022', end: '', role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis. Quis quis mattis amet suspendisse dictum turpis egestas amet. Morbi scelerisque sit lectus arcu vulputate. Et lacinia ut at vitae platea suspendisse sed volutpat. Nibh aliquet morbi egestas iaculis fames interdum hendrerit. Feugiat vitae fames rhoncus eget. Dictumst sit elit turpis amet suspendisse natoque placerat. Placerat turpis sed vitae dolor. Imperdiet cras.' },
        { institution: 'Samsung Brasil', start: 'Fev de 2022', end: 'Fev de 2023', role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis. Quis quis mattis amet suspendisse dictum turpis egestas amet. Morbi scelerisque sit lectus arcu vulputate.' },
        { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: 'Jul de 2021', end: 'Dez de 2021', role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
      ],
      education: [{ institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: 'Jan 2017', end: 'Dez 2021', title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis. Quis quis mattis amet suspendisse dictum turpis egestas amet. Morbi scelerisque sit lectus arcu vulputate. Et lacinia ut at vitae platea suspendisse sed volutpat. Nibh aliquet morbi egestas iaculis fames interdum hendrerit.' }],
      skills: ['CSS', 'JAVA', 'HTML', 'JAVASCRIPT', 'ANGULAR', 'TYPESCRIPT', 'SQL', 'CSS', 'JAVA', 'HTML', 'JAVASCRIPT', 'ANGULAR', 'TYPESCRIPT', 'SQL', 'CSS', 'JAVA', 'HTML', 'JAVASCRIPT', 'ANGULAR', 'TYPESCRIPT', 'SQL'],
      languages: [{ language: 'Português - BR', level: 'Nativo'}, { language: 'Inglês', level: 'Básico'}],
    }
  ];

  protected isEditAboutModalOpen = false;
  protected isEditExperienceModalOpen = false;

  openEditModal(index: number) {
    switch (index) {
      case 0:
        break;
      case 1:
        this.isEditAboutModalOpen = true;
        break;
      case 2:
        this.isEditExperienceModalOpen = true;
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
    }
  }

  closeEditModal() {
    this.isEditAboutModalOpen = false;
    this.isEditExperienceModalOpen = false;
  }

  saveProfileChanges(updatedProfile: any) {
    this.professionalInfo[0].about = updatedProfile;
    console.log('Perfil Atualizado:', updatedProfile);

    this.closeEditModal();
  }
}
