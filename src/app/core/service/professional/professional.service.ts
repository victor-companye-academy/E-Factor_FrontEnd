import { Injectable } from '@angular/core';
import { ProfessionalInfo } from '../../interfaces/professional-info';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor() { }

  public listProfessionals():Array<ProfessionalInfo>{
  return [{
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
      languages: [{ language: 'Português - BR', level: 'Nativo'}, { language: 'Inglês', level: 'Básico'}],
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
      languages: [{ language: 'Português - BR', level: 'Nativo'}, { language: 'Inglês', level: 'Básico'}],
    },
  ];
  }
}