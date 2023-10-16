import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChooseUserComponent } from './choose-user/choose-user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ChooseUserComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
  ]
})
export class PagesModule { }
