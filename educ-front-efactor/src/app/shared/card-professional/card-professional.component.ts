import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-professional',
  templateUrl: './card-professional.component.html',
  styleUrls: ['./card-professional.component.scss']
})
export class CardProfessionalComponent {
  @Input({ alias: 'short' }) public isShort?: boolean;
  @Input({ alias: 'cards' }) public cards?: Array<any> =
    [{ userName: 'Google', title: 'Desenvolxxxssssssssssssssxxxxxxxxvedor Senior', locality: 'São Paulo De Congonha- SP', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...', skills: ['Phyton', 'Javascript', 'Typescript', 'Spring','React','PHP','ww', '111 ']}]

}
