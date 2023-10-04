import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProfessionalComponent } from './components/shared/card/professional/professional.component';
import { VacancyComponent } from './components/shared/card/vacancy/vacancy.component';
import { DetailsComponent } from './components/shared/card/details/details.component';
import { AddressComponent } from './components/shared/address/address.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ChooseUserComponent } from './components/pages/choose-user/choose-user.component';
import { UserRegisterComponent } from './components/shared/user-register/user-register.component';
import { ProfissionalPersonalDataComponent } from './components/pages/profissional/profissional-personal-data/profissional-personal-data.component';
import { ProfissionalAboutComponent } from './components/pages/profissional/profissional-about/profissional-about.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    ProfessionalComponent,
    VacancyComponent,
    DetailsComponent,
    AddressComponent,
    HomeComponent,
    LoginComponent,
    ChooseUserComponent,
    UserRegisterComponent,
    ProfissionalPersonalDataComponent,
    ProfissionalAboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
