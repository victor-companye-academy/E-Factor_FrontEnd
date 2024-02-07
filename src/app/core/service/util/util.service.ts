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

  private businessIdSubject = new BehaviorSubject<number>(0);
  businessId$: Observable<number> = this.businessIdSubject.asObservable();
  
  constructor(private authService: AuthService, private professionalService: ProfessionalService, private businessService: BusinessService) {
    this.updateUserName();
    this.updateProfilePicture();
    this.updateBusinessId();
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

  private updateBusinessId(): void {
    if (this.authService.getRole().includes('GESTOR')) {
      this.getBusinessId().subscribe(
        id => {
          this.businessIdSubject.next(id);
        },
        error => {
          console.error('Erro ao obter ID da empresa:', error);
        }
      );
    }
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
        map((data) => ((data as { ftPerfil: string })?.ftPerfil || ''))
      );
    } else if (role.includes('GESTOR')) {
      return this.businessService.returnBusinessFromLoggedUser().pipe(
        map((data) => ((data as { fotoPerfil: string })?.fotoPerfil || ''))
      );
    } else {
      return of('');
    }
  }

  private getBusinessId(): Observable<number> {
    return this.businessService.returnBusinessFromLoggedUser().pipe(
        map((data) => ((data as { id: number })?.id || 0))
    );
  }
}
        