import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SortEvent } from 'primeng/api';
import { BusinessUser } from 'src/app/core/interfaces/business-user';
import { CreateBusinessUserService } from 'src/app/core/service/create-business-user/create-business-user.service';

@Component({
  selector: 'app-list-business-users',
  templateUrl: './list-business-users.component.html',
  styleUrls: ['./list-business-users.component.scss']
})
export class ListBusinessUsersComponent {

  constructor (private createBusinessUserService: CreateBusinessUserService, private route: ActivatedRoute) { }

  protected id = this.route.snapshot.paramMap.get('id')?.toString() || '';
  protected usersList: Array<BusinessUser> = this.createBusinessUserService.getUsersByBusinessId(this.id);
  protected filterSelected: string = '';
  protected solicitationError: boolean = false;

  protected nameSearch: string = '';
  protected emailSearch: string = '';

  protected isEditUserModalOpen: boolean = false;
  protected isDeleteUserModalOpen: boolean = false;

  protected selectedUserId: number = -1;
  protected user: BusinessUser = this.usersList[this.selectedUserId];

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

  filterUsers(){
    this.usersList = this.createBusinessUserService.getUsersByBusinessId(this.id);
    if(this.nameSearch.length > 0){
      this.usersList = this.usersList.filter(user => user.name.toLowerCase().includes(this.nameSearch.toLowerCase()));
    }
    if(this.emailSearch.length > 0){
      this.usersList = this.usersList.filter(user => user.email.toLowerCase().includes(this.emailSearch.toLowerCase()));
    }
  }

  openEditModal(index: number) {
    this.selectedUserId = index;
    this.user = this.usersList[this.selectedUserId];
    this.isEditUserModalOpen = true;
  }

  openDeleteModal(index: number) {
    this.selectedUserId = index;
    this.user = this.usersList[this.selectedUserId];
    this.isDeleteUserModalOpen = true;
  }

  closeEditModal() {
    this.isEditUserModalOpen = false;
    this.isDeleteUserModalOpen = false;
  }

  saveProfileChanges(updatedUser: any) {
    
    this.user = updatedUser;

    this.createBusinessUserService.updateBusinessUser(this.user);
    this.usersList = this.createBusinessUserService.getUsersByBusinessId(this.id);
    console.log('Perfil Atualizado:', updatedUser);

    this.closeEditModal();
  }

  disableUser(userToDisable: any){
    this.createBusinessUserService.disableBusinessUser(userToDisable.id);
    this.usersList = this.createBusinessUserService.getUsersByBusinessId(this.id);
    this.closeEditModal();
  }

  ativateUser(userToActivate: any){
    this.createBusinessUserService.ativateBusinessUser(userToActivate.id);
    this.usersList = this.createBusinessUserService.getUsersByBusinessId(this.id);
    this.closeEditModal();
  }
}
