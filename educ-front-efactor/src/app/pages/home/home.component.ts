import { Component } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';
import { CardProfessional } from 'src/app/core/interfaces/card-professional';
import { CardVacancy } from 'src/app/core/interfaces/card-vacancy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected about: Array<CardDetails> = [
    {
      // src: 'https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png',
      title: "Publicar Vaga",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssstLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst..."
    },
    {
      title: "Entrar em contato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst..."
    },
    {
      title: "Mostrar interessa na Vaga",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit..."
    }, {
      title: "Buscar Vaga",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssstLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst..."
    },
    {
      title: "Acesso na palma da mão",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst..."
    },
    {
      title: "Buscar Profissional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit..."
    }
  ]

  protected testimonials: Array<CardDetails> = [
    {
      title: "Buscar Profissional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit..."
    },
    {
      title: "Entrar em contato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
    }
  ]

  protected cardVacancy: Array<CardVacancy> = [
    {
      companyName: 'Google',
      title: 'Desenvolvedor Senior',
      days: 'Há 6 dias',
      contract: 'CLT',
      locality: 'São Paulo - SP',
      description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse maecenas condimentum blandit vitae tortor dis nec mattis. Ipsum eu praesent orci lacus. Sed lorem id duis tempor felis tempor molestie. Commodo nisl sed massa varius magna interdum. Pulvinar nibh dignissim egestas ut. Nibh amet vitae sed duis sit diam. Feugiat sit viverra habitant platea adipiscing amet in nisi cursus. Feugiat mi rutrum velit vitae.',
      mode: 'Home Office',
      skills: ['Angular', 'Javascript', 'Typescript', 'Spring'],
      status: 'Ultimas Vagas',
    },
    {
      companyName: 'Google',
      title: 'Desenvolvedor Senior',
      days: 'Há 6 dias',
      contract: 'CLT',
      locality: 'São Paulo - SP',
      description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse maecenas condimentum blandit vitae tortor dis nec mattis. Ipsum eu praesent orci lacus. Sed lorem id duis tempor felis tempor molestie. Commodo nisl sed massa varius magna interdum. Pulvinar nibh dignissim egestas ut. Nibh amet vitae sed duis sit diam. Feugiat sit viverra habitant platea adipiscing amet in nisi cursus. Feugiat mi rutrum velit vitae.',
      mode: 'Home Office',
      skills: ['Angular', 'Javascript', 'Typescript', 'Spring'],
      status: 'Ultimas Vagas',
      src: 'https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png'
    }]

  protected cardProfessional: Array<CardProfessional> = [
    {
      userName: 'Marcos Henrique',
      title: 'Desenvolvedor Senior',
      locality: 'São Paulo, SP',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'HTML']
    },
    {
      userName: 'João Silva',
      title: 'Desenvolvedor Senior',
      locality: 'São Paulo, SP',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      skills: ['Phyton', 'Javascript', 'Typescript', 'Spring', 'React', 'PHP', 'HTML']
    }
  ]
}
