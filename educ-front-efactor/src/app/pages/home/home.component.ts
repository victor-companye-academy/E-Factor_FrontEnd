import { Component } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';
import { CardProfessional } from 'src/app/core/interfaces/card-professional';
import { CardVacancy } from 'src/app/core/interfaces/card-vacancy';
import { CardDetailsService } from 'src/app/core/service/card-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private cardDetailsService:CardDetailsService){}

  protected about: Array<CardDetails> = this.cardDetailsService.getAboutList();

  protected testimonials: Array<CardDetails> = this.cardDetailsService.getTestimonialsList();

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

  public currentIndex: number = 0;

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevCard() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
