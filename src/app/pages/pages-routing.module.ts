import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChooseUserComponent } from './choose-user/choose-user.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { BiographyComponent } from './biography/biography.component';
import { AboutComponent } from './about/about.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { CodeConfirmationComponent } from './code-confirmation/code-confirmation.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search-professionals', component: ProfessionalsComponent },
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
  {path: 'newsletter', component: NewsletterComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
