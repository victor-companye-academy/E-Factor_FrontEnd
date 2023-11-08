import { Injectable } from '@angular/core';
import { CardDetails } from '../../interfaces/card-details';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor() { }

  public listNovelties(): Array<CardDetails> {
    return [
      {
        src: 'assets/imgs/noticias-bg-1.svg',
        title: "Test Card1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
      },
      {
        src: 'assets/imgs/noticias-bg-2.svg',
        title: "Test Card2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
      },
      {
        src: 'assets/imgs/curso-bg-1.svg',
        title: "Test Card3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
      },
      {
        src: 'assets/imgs/curso-bg-2.svg',
        title: "Test Card4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
      },
      {
        src: 'assets/imgs/curso-bg-1.svg',
        title: "Test Card",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
      }
    ]
  }

  public listCourses(): Array<CardDetails> {
    return [
      {
        src: 'assets/imgs/curso-bg-1.svg',
        title: "Test Card1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
      },
      {
        src: 'assets/imgs/curso-bg-2.svg',
        title: "Test Card2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
      },
      {
        src: 'assets/imgs/curso-bg-1.svg',
        title: "Test Card3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
      },
      {
        src: 'assets/imgs/curso-bg-2.svg',
        title: "Test Card4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elemeccccccccccccsssssd ssntum curabitur vit..."
      }
    ]
  }


}
