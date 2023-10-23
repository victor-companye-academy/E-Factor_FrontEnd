import { Component } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
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
    },
    {
      title: "Test Card3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
    },
    {
      title: "Test Card4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
    },
  ]
  public currentIndex: number = 0;

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevCard() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
