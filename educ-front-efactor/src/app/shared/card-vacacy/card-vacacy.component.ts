import { Component, HostListener, Input } from '@angular/core';
import { CardVacacy } from 'src/app/core/interfaces/card-vacacy';

@Component({
  selector: 'card-vacacy',
  templateUrl: './card-vacacy.component.html',
  styleUrls: ['./card-vacacy.component.scss']
})
export class CardVacacyComponent {

  @Input({ alias: 'short' }) public isShort?: boolean;
  @Input({ alias: 'cards' }) public cards?: Array<CardVacacy>;



  private screenSize: number = 1000;
  public isSmallScreen: boolean = window.innerWidth <= this.screenSize;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isSmallScreen = window.innerWidth <= this.screenSize;
  }
}
