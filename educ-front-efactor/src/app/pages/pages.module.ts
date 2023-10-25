import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChooseUserComponent } from './choose-user/choose-user.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { BiographyComponent } from './biography/biography.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ChooseUserComponent,
    AboutComponent,
    PersonalDataComponent,
    BiographyComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ButtonModule
  ],
})
export class PagesModule { }
