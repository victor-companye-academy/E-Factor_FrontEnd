import { Component } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { ProfessionalInfo } from 'src/app/core/interfaces/professional-info';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';

@Component({
  selector: 'app-professionals-list',
  templateUrl: './professionals-list.component.html',
  styleUrls: ['./professionals-list.component.scss']
})
export class ProfessionalsListComponent {

  constructor (private professionalService: ProfessionalService) { }

  protected usersList: Array<ProfessionalInfo> = this.professionalService.listProfessionals();
  protected filterSelected: string = '';
  protected solicitationError: boolean = false;

  protected nameSearch: string = '';
  protected emailSearch: string = '';

  onSort(event: SortEvent) {
    event.data?.sort((a: any, b: any) => {
      let result = 0;
      if (new Date(a.creationDate) < new Date(b.creationDate)) {
        result = 1;
      }
      if (new Date(a.creationDate) > new Date(b.creationDate)) {
        result = -1;
      }
      if (new Date(a.creationDate) == new Date(b.dacreationDatete)) {
        result = 0;
      }
      return event.order ? event.order * result : 0;
    });
  }

  filterUsers(){
    this.usersList = this.professionalService.listProfessionals();
    if(this.nameSearch.length > 0){
      this.usersList = this.usersList.filter(user => user.name.toLowerCase().includes(this.nameSearch.toLowerCase()));
    }
    if(this.emailSearch.length > 0){
      this.usersList = this.usersList.filter(user => user.email.toLowerCase().includes(this.emailSearch.toLowerCase()));
    }
  }
}
