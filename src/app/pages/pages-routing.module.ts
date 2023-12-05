import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChooseUserComponent } from './choose-user/choose-user.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { BiographyComponent } from './biography/biography.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { CodeConfirmationComponent } from './code-confirmation/code-confirmation.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AboutComponent } from './about/about.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { BusinessUserComponent } from './business-user/business-user.component';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ProfessionalProfileComponent } from './professional-profile/professional-profile.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { CreateVacancyComponent } from './create-vacancy/create-vacancy.component';
import { RequestCoinFactorComponent } from './request-coin-factor/request-coin-factor.component';
import { SendRequestComponent } from './send-request-coin/send-request.component';
import { CreateVacancyDetailsComponent } from './create-vacancy-details/create-vacancy-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search-professionals', component: ProfessionalsComponent },
  { path: 'search-vacancies', component: VacanciesComponent },
  { path: 'selecionar-usuario', component: ChooseUserComponent },
  { path: 'criar-conta-profissional', component: PersonalDataComponent },
  { path: 'criar-conta-empresa', component: PersonalDataComponent },
  { path: 'biografia-profissional', component: BiographyComponent },
  { path: 'biografia-empresa', component: BiographyComponent },
  { path: 'informacoes-profissional', component: UserInformationComponent },
  { path: 'informacoes-empresa', component: UserInformationComponent },
  { path: 'send-email', component: SendEmailComponent },
  { path: 'confirm-code/:email', component: CodeConfirmationComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'create-business-user', component: BusinessUserComponent },
  {
    path: 'create-vacancy',
    children: [
      {path:'', component: CreateVacancyComponent},
      {path:'details', component: CreateVacancyDetailsComponent}
    ]
  },
  {
    path: 'request-coin-factor',
    children: [
      { path: '', component: RequestCoinFactorComponent },
      { path: 'send', component: SendRequestComponent }]
  },
  { path: 'business-profile/:id', component: BusinessProfileComponent },
  { path: 'professional-profile/:id', component: ProfessionalProfileComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
