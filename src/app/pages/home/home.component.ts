import { Component, HostListener, OnInit } from '@angular/core';
import { CardDetails } from 'src/app/core/interfaces/card-details';
import { ProfessionalCard } from 'src/app/core/interfaces/professional-card';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { CardDetailsService } from 'src/app/core/service/cardDetails/card-details.service';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cardDetailsService: CardDetailsService, private professionalService: ProfessionalService,
    private vacancyService: VacancyService,  private authService: AuthService) {
    if (this.authService.isAuthenticated()) {
      this.isLogged = true;
    }
    
    if (window.innerWidth > 1500) {
      this.numOfCards = 3;
    } else if (window.innerWidth < 1500 && window.innerWidth > 991) {
      this.numOfCards = 2;
    } else {
      this.numOfCards = 1;
    }
  }

  protected isLogged: boolean = false;
  protected about: Array<CardDetails> = this.cardDetailsService.listAbout();
  protected testimonials: Array<CardDetails> = this.cardDetailsService.listTestimonials();

  protected cardVacancy!: Array<Vacancy>;

  protected cardProfessional!: Array<ProfessionalCard>;

  public responsiveOptions: any[] | undefined;
  protected numOfCards: number;
  protected isBlockNonloggedModalOpen: boolean = false;

  protected banners: Array<CardDetails> = this.cardDetailsService.listBanners();

  protected async initializeVacanciesList(): Promise<void> {
    try {
      this.cardVacancy = await this.vacancyService.listVacancies();
    } catch (error) {
      console.error('Erro ao inicializar a lista de vagas:', error);
    }
  }

  protected async initializeProfessionalsList(): Promise<void> {
    try {
      this.cardProfessional = await this.professionalService.listProfessionals();
    } catch (error) {
      console.error('Erro ao inicializar a lista de vagas:', error);
    }
  }

  async ngOnInit() {

    await this.initializeVacanciesList();
    await this.initializeProfessionalsList();
  }

  openNonLoggedModal() {
    this.isBlockNonloggedModalOpen = true;
  }

  closeNonLoggedModal() {
    this.isBlockNonloggedModalOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    if (window.innerWidth > 1500) {
      this.numOfCards = 3;
    } else if (window.innerWidth < 1500 && window.innerWidth > 991) {
      this.numOfCards = 2;
    } else if (window.innerWidth < 991) {
      this.numOfCards = 1;
    }
  }
}
