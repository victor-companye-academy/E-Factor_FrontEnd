import { Component } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { BusinessInfo } from 'src/app/core/interfaces/business-info';
import { ProfessionalInfo } from 'src/app/core/interfaces/professional-info';
import { BusinessService } from 'src/app/core/service/business/business.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent {

  constructor (private businessService: BusinessService) { }

  protected businessList: Array<BusinessInfo> = this.businessService.listBusiness();
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
      if (new Date(a.creationDate) == new Date(b.creationDate)) {
        result = 0;
      }
      return event.order ? event.order * result : 0;
    });
  }

  filterBusiness(){
    this.businessList = this.businessService.listBusiness();
    if(this.nameSearch.length > 0){
      this.businessList = this.businessList.filter(business => business.name.toLowerCase().includes(this.nameSearch.toLowerCase()));
    }
    if(this.emailSearch.length > 0){
      this.businessList = this.businessList.filter(business => business.email.toLowerCase().includes(this.emailSearch.toLowerCase()));
    }
  }
}
