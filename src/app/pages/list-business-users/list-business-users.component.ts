import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, SortEvent } from 'primeng/api';
import { combineLatest } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { BusinessUserService } from 'src/app/core/service/business-user/business-user.service';
import { CreateBusinessUserService } from 'src/app/core/service/create-business-user/create-business-user.service';
import { UtilService } from 'src/app/core/service/util/util.service';

@Component({
  selector: 'app-list-business-users',
  templateUrl: './list-business-users.component.html',
  styleUrls: ['./list-business-users.component.scss']
})
export class ListBusinessUsersComponent {

  constructor (private createBusinessUserService: CreateBusinessUserService, private route: ActivatedRoute,
    private authService: AuthService, private utilService: UtilService, private businessUserService: BusinessUserService, 
    private router: Router, private messageService: MessageService) {
    
    this.isLoading = true;
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
      
    if (this.authService.isAuthenticated() && this.authService.getRole() == 'GESTOR_EMPRESA') {
      combineLatest([
        this.utilService.businessId$,
      ]).subscribe(
        ([id]) => {

          this.businessId = id;

          if (this.businessId !== this.id){
            this.router.navigate(['/']);
          }

          this.businessUserService.listBusinessUsers().subscribe(
            res => {
              this.usersList = res;
              this.isLoading = false;
            },
            error => {
              this.isLoading = false;
              this.solicitationError = true;
              this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao carregar usuários' });
            }
          );
        },
        error => {
          this.isLoading = false;
          this.solicitationError = true;
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao carregar usuários' });
        }
      );
    } else {
      this.isLoading = false;
      this.router.navigate(['/']);
    }
  }

  protected isLoading: boolean = false;
  protected id: number;
  protected businessId: number = 0;
  protected usersList: any;
  protected filterSelected: string = '';
  protected solicitationError: boolean = false;

  protected nameSearch: string = '';
  protected emailSearch: string = '';

  protected isEditUserModalOpen: boolean = false;
  protected isDeleteUserModalOpen: boolean = false;

  protected selectedUserId: number = -1;
  protected user: any;

  onSort(event: SortEvent) {
    event.data?.sort((a: any, b: any) => {
      const dateA = this.parseDate(a.dataRegistro);
      const dateB = this.parseDate(b.dataRegistro);
  
      let result = 0;
      if (dateA < dateB) {
        result = 1;
      } else if (dateA > dateB) {
        result = -1;
      }
      return event.order ? event.order * result : 0;
    });
  }
  
  private parseDate(dateString: string): Date {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
  }

  filterUsers() {
    this.isLoading = true;
  
    this.businessUserService.listBusinessUsers().subscribe(
      (res: any) => {
        this.usersList = res;
  
        if (this.nameSearch.length > 0) {
          this.usersList = this.usersList.filter((user: { nome: string; }) => user.nome.toLowerCase().includes(this.nameSearch.toLowerCase()));
        }
  
        if (this.emailSearch.length > 0) {
          this.usersList = this.usersList.filter((user: { email: string; }) => user.email.toLowerCase().includes(this.emailSearch.toLowerCase()));
        }
  
        this.solicitationError = false;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.solicitationError = true;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao filtrar usuários' });
      }
    );
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
    this.reloadRoute();
  }

  saveProfileChanges() {
    
    setTimeout(() => {
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Informações atualizadas com sucesso' });
    }, 1000);

    this.closeEditModal();
  }

  disableUser(){
    setTimeout(() => {
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Usuário destivado com sucesso' });
    }, 1000);

    this.closeEditModal();
  }

  ativateUser(userToActivate: any){
    this.createBusinessUserService.ativateBusinessUser(userToActivate.id);
    this.closeEditModal();
  }

  reloadRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
