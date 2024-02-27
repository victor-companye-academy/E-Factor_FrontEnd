import { Injectable } from '@angular/core';
import { ProfessionalInfo } from '../../interfaces/professional-info';
import { ProfessionalCard } from '../../interfaces/professional-card';
import { Observable, lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private url: string = 'https://internal-gateway.efactor.digital/ms-profissional/v1/filtro';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  private keyProfessionalStorage: string = 'professionals';
  private professionalArray: Array<ProfessionalCard> = []

  //método provisório, será excluido
  public listProfessionalsProvisorio(): Array<ProfessionalInfo> {
    let dataStorage: string | null;
    const key: string = 'professionals'

    dataStorage = sessionStorage.getItem(key);

    if (dataStorage) {
      try {
        return JSON.parse(dataStorage);
      } catch (error) {
        console.error("Erro ao analisar os dados armazenados:", error);
      }
    }

    const professionalsArray: Array<ProfessionalInfo> = [
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
        about: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis. Quis quis mattis amet suspendisse dictum turpis egestas amet. Morbi scelerisque sit lectus arcu vulputate. Et lacinia ut at vitae platea suspendisse sed volutpat. Nibh aliquet morbi egestas iaculis fames interdum hendrerit. Feugiat vitae fames rhoncus eget. Dictumst sit elit turpis amet suspendisse natoque placerat. Placerat turpis sed vitae dolor. Imperdiet cras.',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis. Quis quis mattis amet suspendisse dictum turpis egestas amet. Morbi scelerisque sit lectus arcu vulputate. Et lacinia ut at vitae platea suspendisse sed volutpat. Nibh aliquet morbi egestas iaculis fames interdum hendrerit. Feugiat vitae fames rhoncus eget. Dictumst sit elit turpis amet suspendisse natoque placerat. Placerat turpis sed vitae dolor. Imperdiet cras.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis. Quis quis mattis amet suspendisse dictum turpis egestas amet. Morbi scelerisque sit lectus arcu vulputate. Et lacinia ut at vitae platea suspendisse sed volutpat. Nibh aliquet morbi egestas iaculis fames interdum hendrerit.' }
        ],
        skills: ['CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2022-01-01'
      },
      {
        id: "2",
        photo: '',
        name: 'Victor Stefano Garcia',
        age: '19',
        city: 'Guarujá',
        state: 'São Paulo',
        email: 'victor@email.com',
        cellphone: '(13) 99719-9330',
        seniority: 'Júnior',
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
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2022-01-01'
      },
      {
        id: "3",
        photo: '',
        name: 'Ericris Rossato',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Júnior',
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
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2022-01-01'
      },
      {
        id: "4",
        photo: '',
        name: 'João Silva 4',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Junior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2022-01-01'
      },
      {
        id: "5",
        photo: '',
        name: 'João Silva 5',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Pleno',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2023-01-01'
      },
      {
        id: "6",
        photo: '',
        name: 'Marcos Henrique 6',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Sênior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2023-01-01'
      },
      {
        id: "7",
        photo: '',
        name: 'João Silva 7',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Sênior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2023-01-01'
      },
      {
        id: "8",
        photo: '',
        name: 'João Silva 8',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Junior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2023-01-01'
      },
      {
        id: "9",
        photo: '',
        name: 'João Silva 9',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Junior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2023-01-01'
      },
      {
        id: "10",
        photo: '',
        name: 'João Silva 10',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Pleno',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2023-01-01'
      },
      {
        id: "11",
        photo: '',
        name: 'Marcos Henrique 11',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Sênior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2023-01-01'
      },
      {
        id: "12",
        photo: '',
        name: 'João Silva 12',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Sênior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2023-01-01'
      },
      {
        id: "13",
        photo: '',
        name: 'João Silva 13',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Junior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2023-01-01'
      },
      {
        id: "14",
        photo: '',
        name: 'João Silva 14',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Junior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2019-01-01'
      },
      {
        id: "15",
        photo: '',
        name: 'João Silva 15',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Pleno',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2019-01-01'
      },
      {
        id: "16",
        photo: '',
        name: 'Marcos Henrique 16',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Sênior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2019-01-01'
      },
      {
        id: "17",
        photo: '',
        name: 'João Silva 17',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Sênior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2019-01-01'
      },
      {
        id: "18",
        photo: '',
        name: 'João Silva 18',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Junior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2019-01-01'
      },
      {
        id: "19",
        photo: '',
        name: 'João Silva 19',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Junior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2019-01-01'
      },
      {
        id: "20",
        photo: '',
        name: 'João Silva 20',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Pleno',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2019-01-01'
      },
      {
        id: "21",
        photo: '',
        name: 'Marcos Henrique 21',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Sênior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2019-01-01'
      },
      {
        id: "22",
        photo: '',
        name: 'João Silva 22',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Sênior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2019-01-01'
      },
      {
        id: "23",
        photo: '',
        name: 'João Silva 23',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Junior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2019-01-01'
      },
      {
        id: "24",
        photo: '',
        name: 'João Silva 24',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Junior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2019-01-01'
      },
      {
        id: "25",
        photo: '',
        name: 'João Silva 24',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Junior',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2023-12-16'
      },
      {
        id: "26",
        photo: '',
        name: 'João Silva 25',
        age: '13',
        city: 'São Paulo',
        state: 'São Paulo',
        email: 'ericris@email.com',
        cellphone: '(11) 98907-6032',
        seniority: 'Pleno',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        experience: [
          { institution: 'Cogna Educação', start: '2022-01-01', end: '', current: true, role: 'Analista de Desenvolvimento Sênior', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque. Vitae consequat gravida neque eu adipiscing massa nulla adipiscing quis.' },
          { institution: 'Samsung Brasil', start: '2022-02-01', end: '2023-02-01', current: false, role: 'Desenvolvedor Front-End Pleno', description: 'Lorem ipsum dolor sit amet consectetur. Morbi scelerisque sit lectus arcu vulputate.' },
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2021-07-01', end: '2021-12-01', current: false, role: 'Monitor de Programação em C++', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' },
        ],
        education: [
          { institution: 'IFSP | Instituto Federal de Educação, Ciência e Tecnologia de São Paulo', start: '2017-01-01', end: '2021-12-01', current: false, title: 'Curso Técnico Integrado Informática', description: 'Lorem ipsum dolor sit amet consectetur. Eget consequat quis quis diam nisl aliquet. Est in consequat consequat vel sagittis suspendisse id. Porttitor lacus dignissim fames porta interdum neque.' }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'Swift', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
        languages: [{ language: 'Português - BR', level: 'Nativo' }, { language: 'Inglês', level: 'Básico' }],
        creationDate: '2023-12-20'
      }];

    sessionStorage.setItem(key, JSON.stringify(professionalsArray));
    console.log("Usando requisição para API");

    return professionalsArray;
  }

  public async listProfessionals(): Promise<Array<ProfessionalCard>> {
    let dataStorage: string | null;

    dataStorage = sessionStorage.getItem(this.keyProfessionalStorage);

    if (dataStorage && JSON.parse(dataStorage).length > 0) {
      try {
        return JSON.parse(dataStorage);
      } catch (error) {
        console.error("Erro ao analisar os dados armazenados:", error);
      }
    }

    try {
      const res = await lastValueFrom(this.getProfessionals());
      this.professionalArray = [...res as ProfessionalCard[]];
      sessionStorage.setItem(this.keyProfessionalStorage, JSON.stringify(this.professionalArray));
    } catch (error) {
      console.log('Erro ao processar a requisição da listagem de profissionais');
    }

    return this.professionalArray;
  }

  public updateProfessional(updatedProfessional: any) {
    const professionalsArray: Array<ProfessionalInfo> = this.listProfessionalsProvisorio();
    const index = professionalsArray.findIndex(professional => professional.id === updatedProfessional.id);

    if (index !== -1) {
      professionalsArray[index] = updatedProfessional;
      sessionStorage.setItem('key', JSON.stringify(professionalsArray));
    }
  }

  public getProfessionals(): Observable<ProfessionalCard[]> {
    const requestBody = {
      "senioridade": null,
      "habilidades": []
    }

    return this.httpClient.post<ProfessionalCard[]>(this.url, requestBody)
      .pipe(
        res => res,
        error => error
      );
  }
  
  public returnProfessionalFromLoggedUser() {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };
  
    return this.httpClient.get('https://internal-gateway.efactor.digital/ms-profissional/v1/detalhe-profissional?id_usuario=' + this.authService.getId(), { headers })
      .pipe(
        map(response => response)
      );
  }

  public returnProfessional(id: number) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };
  
    return this.httpClient.get('https://internal-gateway.efactor.digital/ms-profissional/v1/detalhe-profissional?id_usuario=' + id, { headers })
      .pipe(
        map(response => response)
      );
  }

  public salvarDescricao(descricao: string){
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };
    const body = {
      descricao: descricao
    };

    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/salvar-descricao', body, { headers })
      .pipe(
        map(response => response)
      );
  }

  public salvarJornada(jornadas: any){
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };
    const jornadasMapeadas = jornadas.map((jornada: { nrIdJornada: any, dsTitulo: any, dsInstituicao: any,
      tpJornada: any, dtInicio: any, dtFim: any, dsResumo: any }) => {

     return { idJornada: jornada.nrIdJornada, cargo: jornada.dsTitulo, instituicao: jornada.dsInstituicao, 
       tipoExperiencia: jornada.tpJornada, dataInicio: jornada.dtInicio, dataFim: jornada.dtFim, resumo: jornada.dsResumo };

   });
   const body = {
     jornadas: jornadasMapeadas
   }

    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/cadastrar-experiencia', body, { headers })
      .pipe(
        map(response => response)
      );
  }

  public removerJornada(id: Array<number>){
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };
    const body = {
      identificadorJornadas: id
    };

    return this.httpClient.delete<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/remover-experiencia', { headers, body })
      .pipe(
        map(response => response)
      );
  }

  public atualizarJornada(jornadas: any){
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };
    const jornadasMapeadas = jornadas.map((jornada: { nrIdJornada: any, dsTitulo: any, dsInstituicao: any,
       tpJornada: any, dtInicio: any, dtFim: any, dsResumo: any }) => {

      return { idJornada: jornada.nrIdJornada, cargo: jornada.dsTitulo, instituicao: jornada.dsInstituicao, 
        tipoExperiencia: jornada.tpJornada, dataInicio: jornada.dtInicio, dataFim: jornada.dtFim, resumo: jornada.dsResumo };

    });
    const body = {
      jornadas: jornadasMapeadas
    }

    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/atualizar-experiencia', body, { headers })
      .pipe(
        map(response => response)
      );
  }

  public salvarDadosPessoais(objPerfil: any){
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };
    const objDadosPessoais = {
      nome: objPerfil.nomeCompleto,
      fotoPerfil: objPerfil.ftPerfil,
      email: objPerfil.contato.email,
      telefone: objPerfil.contato.telefone,
      estado: objPerfil.endereco.estado,
      cidade: objPerfil.endereco.cidade,
      senioridade: objPerfil.senioridade
    };
    const body = objDadosPessoais;

    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/salvar-dados-pessoais', body, { headers })
      .pipe(
        map(response => response)
      );
  }

  public listInterestedVacancies() {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };
    
    return this.httpClient.get<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/listar-vagas-interesse', { headers })
      .pipe(
        map(response => response)
      );
  }

  public getSkillsList() {
    return this.httpClient.get<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/habilidades')
      .pipe(
        map(response => response)
      );
  }

  public saveSkills(skills: Array<any>) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };
  
    const habilidadesFormatadas = skills.map((skill: { id: number; habilidade: string }) => {
      return {
        habilidade: skill.id,
        nivel: null // Nível não utilizado, mantido por compatibilidade
      };
    });
  
    const body = {
      habilidades: habilidadesFormatadas
    };
  
    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/cadastrar-habilidades', body, { headers })
      .pipe(
        map(response => response)
      );
  }
  
  public deleteSkills(skillsToDelete: Array<number>) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    if (skillsToDelete.length == 0) {
      skillsToDelete.push(0);
    }

    const body = {
      habilidades: skillsToDelete
    }

    return this.httpClient.delete<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/remover-habilidades', { headers, body })
      .pipe(
        map(response => response)
      );
  }

  getLanguagesList() {
    return this.httpClient.get<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/idiomas')
      .pipe(
        map(response => response)
      );
  }

  public saveLanguages(languages: Array<any>) {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`
    };

    const body = languages;
    
    return this.httpClient.post<any>('https://internal-gateway.efactor.digital/ms-profissional/v1/salvar-idioma', body, { headers })
      .pipe(
        map(response => response)
      );
  }
}