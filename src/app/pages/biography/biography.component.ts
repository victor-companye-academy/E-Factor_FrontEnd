import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent {

  protected pageType = 0;
  protected path: string = '';
  protected h2Text: string = '';
  protected biography: string = '';
  protected isBiographyValid: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.path = this.route.snapshot.url[0].path;
    
    if (this.path === 'biografia-profissional') {
      this.pageType = 0;
      this.h2Text = 'Biografia';
    } else if (this.path === 'biografia-empresa') {
      this.h2Text = 'Sobre a empresa';
      this.pageType = 1;
    }
  }

  public setBiography(event: any){
    let value = event.target.value;
    this.biography = value;
    if (this.biography != ''){
      this.isBiographyValid = true;
    } else  {
      this.isBiographyValid = false;
    }
  }

  getLinkDestinationContinue() {
    if (this.pageType == 0){
      return '/login';
    } else {
      return '/criar-conta-empresa';
    }
  }

  getLinkDestinationBack(){
    if (this.pageType == 0){
      return '/informacoes-profissional';
    } else {
      return '/informacoes-empresa';
    }
  }
}
