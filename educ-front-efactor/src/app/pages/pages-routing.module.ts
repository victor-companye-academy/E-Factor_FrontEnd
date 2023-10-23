import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChooseUserComponent } from './choose-user/choose-user.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { BiographyComponent } from './biography/biography.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'selecionar-usuario', component: ChooseUserComponent },
  { path: 'criar-conta-profissional', component: PersonalDataComponent },
  { path: 'criar-conta-empresa', component: PersonalDataComponent },
  { path: 'biografia-profissional', component: BiographyComponent },
  { path: 'biografia-empresa', component: BiographyComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
