import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardProfessional } from 'src/app/core/interfaces/card-professional';
import { CardProfessionalService } from 'src/app/core/service/cardProfessional/card-professional.service';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent {

  constructor(private cardProfessionalService:CardProfessionalService){}

  protected cardProfessional: Array<CardProfessional> = this.cardProfessionalService.listProfessionals(); 

}
