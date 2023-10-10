import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'card-vacacy',
  templateUrl: './card-vacacy.component.html',
  styleUrls: ['./card-vacacy.component.scss']
})
export class CardVacacyComponent {
  public screenWidth: number = window.innerWidth

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth
  }
}
