import { Component } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';
import { CardVacacy } from 'src/app/core/interfaces/card-vacacy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected about: Array<CardDetails> = [
    {
      src: 'https://cdn3.iconfinder.com/data/icons/people-office-activities/50/11-512.png',
      title: "Buscar Profissional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssstLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst..."
    },
    {
      src: null,
      title: "Buscar Profissional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vissssssssssssssssssssssssssssssssssssssssssssssst..."
    },
    {
      src: null,
      title: "Buscar Profissional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit..."
    }
  ]

  protected testimonials: Array<CardDetails> = [
    {
      src: null,
      title: "Buscar Profissional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit..."
    },
    {
      src: 'https://cdn3.iconfinder.com/data/icons/people-office-activities/50/11-512.png',
      title: "Entrar em contato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
    }
  ]

  protected cardVacacy: Array<CardVacacy> = [{ companyName: 'Google', title: 'Desenvolvedor Senior', days: 'Há 6 dias', contract: 'CLT', locality: 'São Paulo - SP', description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse maecenas condimm blandit vitae tortor dis nec mattis. Ipsum eu praesent orci lacus. Sed lorem id duis tempor felis tempor molestie. Commodo nisl sed massa varius magna interdum. Pulvinar nibh dignissim egestas ut. Nibh amet vitae sed duis sit diam. Feugiat sit viverra habitant platea adipiscing amet in nisi cursus. Feugiat mi rutrum velit vitae.', mode: 'Home Office', skills: ['Angular', 'Javascript', 'Typescript', 'Spring'], status: 'Ultimas Vagas', src: 'https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png' }, { companyName: 'Google', title: 'Desenvolvedor Senior', days: 'Há 6 dias', contract: 'CLT', locality: 'São Paulo - SP', description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse maecenas condimentum blandit vitae tortor dis nec mattis. Ipsum eu praesent orci lacus. Sed lorem id duis tempor felis tempor molestie. Commodo nisl sed massa varius magna interdum. Pulvinar nibh dignissim egestas ut. Nibh amet vitae sed duis sit diam. Feugiat sit viverra habitant platea adipiscing amet in nisi cursus. Feugiat mi rutrum velit vitae.', mode: 'Home Office', skills: ['Angular', 'Javascript', 'Typescript', 'Spring'], status: 'Ultimas Vagas', src: 'https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png' }]


}
