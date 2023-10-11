import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'card-vacacy',
  templateUrl: './card-vacacy.component.html',
  styleUrls: ['./card-vacacy.component.scss']
})
export class CardVacacyComponent {

  public isShort: boolean = false;
  private screenSize: number = 1000;
  public isSmallScreen: boolean = window.innerWidth <= this.screenSize;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isSmallScreen = window.innerWidth <= this.screenSize;
  }
}
