import { Component } from '@angular/core';
import { Search } from 'src/app/core/interfaces/search';
import { PaginatorState } from 'primeng/paginator';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';
import { formatText } from 'src/app/core/utils/formatText';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { MessageService } from 'primeng/api';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vacancies-created',
  templateUrl: './vacancies-created.component.html',
  styleUrls: ['./vacancies-created.component.scss']
})
export class VacanciesCreatedComponent {
  constructor(private vacancyService: VacancyService, private professionalService: ProfessionalService,
     private authService: AuthService, private messageService: MessageService, private router: Router, private route: ActivatedRoute) {
    
    this.isLoading = true;
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    
    if (this.id && this.authService.isAuthenticated() && this.authService.getRole().includes('PROFISSIONAL')) {
      this.vacancyService.listVacanciesByBusiness(this.id).then(
        (res: any) => {
          this.showInterestBtn = true;
          this.isLoading = false;
          this.vacancy = res;
          this.vacancySearch = this.pagination(this.vacancy);
          this.totalRecords = this.vacancySearch.length;
          this.toShow = true;
          this.onPageChange({page: 0, first: 0, rows: 5, pageCount: 1});
        })
        .catch(          
          error => {
            this.isLoading = false;
            this.toShow = false;
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar as vagas' });
        });
    } else if (this.authService.isAuthenticated() && this.authService.getRole().includes('GESTOR')){
      this.isBusiness = true;
      this.vacancyService.listVacanciesByLoggedBusiness().subscribe(
        (res: any) => {
          this.isLoading = false;
          this.vacancy = res;
          this.vacancySearch = this.pagination(this.vacancy);
          this.totalRecords = this.vacancySearch.length;
          this.toShow = true;
          this.onPageChange({page: 0, first: 0, rows: 5, pageCount: 1});
        },
        error => {
          this.isLoading = false;
          this.toShow = false;
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar as vagas' });
        });
    } else if (this.authService.isAuthenticated() && this.authService.getRole().includes('PROFISSIONAL')) {
      this.professionalService.listInterestedVacancies().subscribe(
        (res: any) => {
          this.isLoading = false;
          this.vacancy = res;
          this.vacancySearch = this.pagination(this.vacancy);
          this.totalRecords = this.vacancySearch.length;
          this.toShow = true;
          this.onPageChange({page: 0, first: 0, rows: 5, pageCount: 1});
        },
        error => {
          this.isLoading = false;
          this.toShow = false;
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar as vagas' });
        }
      )
    } else {
      this.router.navigate(['/']);
    }
  } 

  protected id: number = 0;
  protected isBusiness: boolean = false;
  protected isLoading: boolean = false;
  protected readonly rows: number = 5;
  protected toShow: boolean = true;
  protected visible: boolean = false;
  protected card?: Vacancy;

  protected vacancy: Array<Vacancy> = [];
  protected vacancySearch: Array<Vacancy> = [];

  protected first: number = 0;
  protected totalRecords: number = 0;
  private searchObj: Search | undefined;
  protected showInterestBtn: boolean = false;

  protected setSearch(event: Search) {
    this.first = 0

    if (this.validSearch(event)) {
      this.searchObj = event;
      this.vacancySearch = this.applySearch(this.vacancy, event);
      this.totalRecords = this.vacancySearch.length;

      this.vacancySearch = this.pagination(this.vacancySearch);

    } else {
      this.searchObj = undefined
      this.vacancySearch = this.setList()
    }
    this.toShow = this.isEmptylist(this.vacancySearch)
  }

  private setList(event?: Search): Array<Vacancy> {

    if (!event) {
      if (this.validSearch(this.searchObj)) {

        this.vacancySearch = this.applySearch(this.vacancy, this.searchObj!);
        this.vacancySearch = this.pagination(this.vacancySearch)

        return this.vacancySearch
      }
      else {
        this.vacancySearch = this.pagination(this.vacancy);

        this.totalRecords = this.vacancy.length;

        return this.vacancySearch;
      }
    }
    this.vacancySearch = this.pagination(this.applySearch(this.vacancy, event));

    return this.vacancySearch;
  }

  private isEmptylist(list: Array<Vacancy>): boolean {
    return list.length ? true : false
  }

  private applySearch(list: Array<Vacancy>, search: Search): Array<Vacancy> {
    let newArray: Array<Vacancy> = this.vacancy;
    if (search) {
      for (const key in search) {
        if (search.hasOwnProperty(key)) {
          const searchKey = key as keyof Search;

          if (typeof search[searchKey] === 'string' && search[searchKey]) {
            switch (searchKey) {
              case 'otherPosition':
                newArray = this.searchByPosition(newArray, search[searchKey])
                break;
              case 'otherSkill':
                newArray = this.searchBySkill(newArray, search[searchKey])
                break;
            }
          }
        }
      }
    }
    this.toShow = this.isEmptylist(newArray)
    return newArray;
  }

  private validSearch(search?: Search): boolean {
    if (!search) {
      return false
    }

    let isTrue: boolean = false;

    for (const key in search) {
      if (search.hasOwnProperty(key)) {
        const searchKey = key as keyof Search;

        if (search[searchKey]) {
          isTrue = true
        }

        if (typeof search[searchKey] === 'string' && isTrue && (isTrue || search.otherPosition.trim() !== '' || search.otherSkill.trim() !== '')) {
          isTrue = true;
        }
      }
    }
    return isTrue;
  }

  private searchBySkill(list: Array<Vacancy>, search: string): Array<Vacancy> {
    const newList: Array<Vacancy> = list.filter(card => {
      const lowerSearch = formatText(search.toLowerCase());
      return card.habilidades.some(skill => formatText(skill.toLowerCase()).startsWith(lowerSearch));
    });

    return newList;
  }

  private searchByPosition(list: Array<Vacancy>, search: string): Array<Vacancy> {
    const newList: Array<Vacancy> = list.filter(card => formatText(card.senioridade.toLowerCase()).includes(formatText(search.toLowerCase())))
    return newList
  }

  private pagination(list: Array<Vacancy>): Array<Vacancy> {
    const newList = list.slice(this.first, (this.rows + this.first))
    return newList;
  }

  protected onPageChange(event: PaginatorState) {
    window.scrollTo(0, 120);
    if (event.first !== undefined) {
      this.first = event.first;
    }
    this.setList()
  }

  protected showDialog(card: Vacancy) {
    this.card = card
    this.visible = true;
  }
}
