import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardProfessionalComponent } from './card-professional/card-professional.component';
import { CardVacancyComponent } from './card-vacancy/card-vacancy.component';
import { CardNewsletterComponent } from './card-newsletter/card-newsletter.component';
import { EditProfileAboutModalComponent } from './edit-profile-about-modal/edit-profile-about-modal.component';
import { EditProfileExperienceModalComponent } from './edit-profile-experience-modal/edit-profile-experience-modal.component';

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
    EditProfileAboutModalComponent,
    EditProfileExperienceModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
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
    EditProfileAboutModalComponent
  ]
})
export class SharedModule { }