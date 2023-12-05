import { Injectable } from '@angular/core';
import { ProfessionalInfo } from '../../interfaces/professional-info';
import { ProfessionalService } from '../professional/professional.service';

@Injectable({
  providedIn: 'root'
})
export class CardProfessionalService {

  constructor(private professionalService: ProfessionalService) { }

  public listProfessionals():Array<ProfessionalInfo>{
    return this.professionalService.listProfessionals();
  }
}
