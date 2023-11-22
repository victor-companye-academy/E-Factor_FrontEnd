import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardProfessionalComponent } from './card-professional/card-professional.component';
import { CardVacancyComponent } from './card-vacancy/card-vacancy.component';
import { CardNewsletterComponent } from './card-newsletter/card-newsletter.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { AboutVacancyComponent } from './about-vacancy/about-vacancy.component';

@NgModule({
  declarations: [
    AddressComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CardDetailsComponent,
    CardVacancyComponent,
    CardProfessionalComponent,
    CardNewsletterComponent,
    CardNewsletterComponent,
    FilterComponent,
    SearchComponent,
    AboutVacancyComponent,
    AboutVacancyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AddressComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CardDetailsComponent,
    CardVacancyComponent,
    CardProfessionalComponent,
    CardNewsletterComponent,
    FilterComponent,
    SearchComponent,
    AboutVacancyComponent
  ]
})
export class SharedModule { }