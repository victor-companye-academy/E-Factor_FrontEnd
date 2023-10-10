import { Component } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  about: Array<CardDetails> = [
    {
      src: null,
      title: "Buscar Profissional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit..."
    },
    {
      src: null,
      title: "Buscar Profissional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit..."
    },
    {
      src: null,
      title: "Buscar Profissional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit..."
    }
  ]

  testimonials: Array<CardDetails> = [
    {
      src: 'https://cdn3.iconfinder.com/data/icons/people-office-activities/50/11-512.png',
      title: "Buscar Profissional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vit..."
    },
    {
      src: 'https://cdn3.iconfinder.com/data/icons/people-office-activities/50/11-512.png',
      title: "Entrar em contato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
    }
  ]
}
