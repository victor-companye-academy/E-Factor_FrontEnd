import { Injectable } from '@angular/core';
import { CardDetails } from '../../interfaces/card-details';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {

  constructor() { }

  public listTestimonials(): Array<CardDetails> {
    return [
      {
        title: "Walace",
        description: "Foi ao cruzar caminhos com o Projeto Elias através da Educ360 que as portas se abriram de forma notável. Assim, mergulhei profundamente em áreas como jogos, programação, informática e empreendedorismo."
      },
      {
        title: "Carlos",
        description: "Minha vida passou por transformações significativas. Sem contar que hoje, graças a Deus, não tenho mais que enfrentar a incômoda sensação de dormir de barriga vazia, por não ter o que comer."
      },
      {
        title: "Anny",
        description: "Passei pela jornada Gamer em 2021 e Hoje atuo como desenvolvedora em uma empresa parceria do Educ360. Agradeço por esse projeto mudar as vidas de muitos jovens, assim como fez com a minha."
      },
      {
        title: "Cainã",
        description: "Chamar o Projeto Elias, no Parque Vila Maria, zona norte de São Paulo, de escolinha, é um eufemismo. Adolescente como Cainã Lellis da Silva, 16, descobriu, ao participar da parceria do projeto Educ360°."
      },
      {
        title: "Victor",
        description: "Realizei o treinamento há um ano e hoje estou atuando como desenvolvedor em uma das empresas parceiras do instituto, além de ter a oportunidade de poder participar do desenvolvimento da plataforma E-factor."
      }
    ]
  }

  public listAbout(): Array<CardDetails> {
    return [
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
  }
}
