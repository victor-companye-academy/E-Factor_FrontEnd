import { Injectable } from '@angular/core';
import { CardDetailsLink } from '../../interfaces/card-details-link';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor() { }

  public listNovelties(): Array<CardDetailsLink> {
    return [
      {
        src: 'assets/imgs/noticias-bg-1.svg',
        title: "'Mapa do Emprego'",
        description: "O setor de tecnologia de base deve abrir mais de 800 mil vagas nos próximos 5 anos.",
        link: 'https://globoplay.globo.com/v/10232048/'
      },
      {
        src: 'assets/imgs/noticias-bg-2.svg',
        title: "Gênio da programação",
        description: "Gênio da programação de computadores tem 14 anos e é disputado por empresas. Luiz Henrique é negro e da periferia de SP. Cinco empresas estão de olho no jovem talento da tecnologia.",
        link: 'https://g1.globo.com/globonews/jornal-das-dez/video/genio-da-programacao-de-computadores-tem-14-anos-e-e-disputado-por-empresas-9617844.ghtml'
      },
      {
        src: 'assets/imgs/noticias-bg-3.svg',
        title: "Organizações sociais distribuem ovos de páscoa",
        description: "Sábado foi marcado pela solidariedade.",
        link: 'https://globoplay.globo.com/v/8475857/?abfs=true'
      },
      {
        src: 'assets/imgs/noticias-bg-4.svg',
        title: "Crianças com deficiência ganham app com realidade aumentada",
        description: "A Educ360° lança, numa parceria com a APAE Cotia e o Multigestos, um app em realidade aumentada, que auxiliará as crianças em fase de alfabetização.",
        link: 'http://flertai.com.br/2020/05/criancas-com-deficiencia-ganham-app-com-realidade-aumentada-para-ajudar-na-alfabetizacao-distancia/'
      },
      {
        src: 'assets/imgs/noticias-bg-5.svg',
        title: "Trago Boas Notícias #103",
        description: "No 103º episódio do podcast Trago Boas Notícias, Edgard Piccoli conta a história do Luiz Henrique. Ele tem só 14 anos e já aprendeu muito sobre programação de computadores fazendo aulas grátis em um instituto em São Paulo.",
        link: 'https://www.uol.com.br/ecoa/ultimas-noticias/2021/08/25/trago-boas-noticias-103-luiz-henrique-o-jovem-talento-da-tecnologia.htm'
      }
    ]
  }

  public listCourses(): Array<CardDetailsLink> {
    return [
      {
        src: 'assets/imgs/curso-bg-1.svg',
        title: "Test Card1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit...",
        link: ''
      },
      {
        src: 'assets/imgs/curso-bg-2.svg',
        title: "Test Card2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit...",
        link: ''
      },
      {
        src: 'assets/imgs/curso-bg-1.svg',
        title: "Test Card3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit...",
        link: ''
      },
      {
        src: 'assets/imgs/curso-bg-2.svg',
        title: "Test Card4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit...",
        link: ''
      }
    ]
  }


}
