import { Injectable } from '@angular/core';
import { CardProfessional } from '../../interfaces/card-professional';
import { ProfessionalService } from '../professional/professional.service';

@Injectable({
  providedIn: 'root'
})
export class CardProfessionalService {

  constructor(private professionalService: ProfessionalService) { }

  public listProfessionals():Array<CardProfessional>{
    return this.professionalService.listProfessionals();
  }
}
