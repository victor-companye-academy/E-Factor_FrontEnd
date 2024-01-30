import { Injectable } from '@angular/core';
import { BusinessService } from '../business/business.service';
import { ProfessionalService } from '../professional/professional.service';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private userNameSubject = new BehaviorSubject<string>('');
  userName$: Observable<string> = this.userNameSubject.asObservable();

  private profilePictureSubject = new BehaviorSubject<string>('');
  profilePicture$: Observable<string> = this.profilePictureSubject.asObservable();
  
  constructor(private authService: AuthService, private professionalService: ProfessionalService, private businessService: BusinessService) {
    this.updateUserName();
    this.updateProfilePicture();
  }

  private updateUserName(): void{
    this.getUserName().subscribe(
      name => {
        this.userNameSubject.next(name);
      },
      error => {
        console.error('Erro ao obter nome:', error);
      }
    )
  }

  private updateProfilePicture(): void {   
    this.getProfilePicture().subscribe(
      picture => {
        this.profilePictureSubject.next(picture);
      },
      error => {
        console.error('Erro ao obter imagem do perfil:', error);
      }
    );
  }
  
  private getUserName(): Observable<string> {
    const role = this.authService.getRole();

    if (role.includes('PROFISSIONAL')) {
      return this.professionalService.returnProfessionalFromLoggedUser().pipe(
        map((data) => ((data as { nomeCompleto: string })?.nomeCompleto || ''))
      );
    } else if (role.includes('GESTOR')) {
      return this.businessService.returnBusinessFromLoggedUser().pipe(
        map((data) => ((data as { nomeFantasia: string })?.nomeFantasia || ''))
      );
    } else {
      return of('');
    }
  }
      
  private getProfilePicture() {
    const role = this.authService.getRole();

    if (role.includes('PROFISSIONAL')) {
      return this.professionalService.returnProfessionalFromLoggedUser().pipe(
        map((data) => ((data as { fotoPerfil: string })?.fotoPerfil || ''))
      );
    } else if (role.includes('GESTOR')) {
      return this.businessService.returnBusinessFromLoggedUser().pipe(
        map((data) => ((data as { fotoPerfil: string })?.fotoPerfil || ''))
      );
    } else {
      return of('');
    }
  }
}
        