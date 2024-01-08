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
import { EditProfileAboutModalComponent } from './edit-profile-about-modal/edit-profile-about-modal.component';
import { EditProfileExperienceModalComponent } from './edit-profile-experience-modal/edit-profile-experience-modal.component';
import { EditProfileEducationModalComponent } from './edit-profile-education-modal/edit-profile-education-modal.component';
import { EditProfileSkillsModalComponent } from './edit-profile-skills-modal/edit-profile-skills-modal.component';
import { EditProfileLanguageModalComponent } from './edit-profile-language-modal/edit-profile-language-modal.component';
import { EditProfileInfosModalComponent } from './edit-profile-infos-modal/edit-profile-infos-modal.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { ToastModule } from 'primeng/toast';
import { AboutVacancyComponent } from './about-vacancy/about-vacancy.component';
import { EditBusinessUserModalComponent } from './edit-business-user-modal/edit-business-user-modal.component';
import { DeleteBusinessUserModalComponent } from './delete-business-user-modal/delete-business-user-modal.component';
import { ApproveSolicitationModalComponent } from './approve-solicitation-modal/approve-solicitation-modal.component';

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
    EditProfileExperienceModalComponent,
    EditProfileEducationModalComponent,
    EditProfileSkillsModalComponent,
    EditProfileLanguageModalComponent,
    EditProfileInfosModalComponent,
    FilterComponent,
    SearchComponent,
    AboutVacancyComponent,
    AboutVacancyComponent,
    HeaderComponent,
    EditBusinessUserModalComponent,
    DeleteBusinessUserModalComponent,
    ApproveSolicitationModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    ToastModule
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
    EditProfileAboutModalComponent,
    EditProfileExperienceModalComponent,
    EditProfileEducationModalComponent,
    EditProfileSkillsModalComponent,
    EditProfileLanguageModalComponent,
    EditProfileInfosModalComponent,
    FilterComponent,
    SearchComponent,
    AboutVacancyComponent,
    HeaderComponent,
    EditBusinessUserModalComponent,
    DeleteBusinessUserModalComponent,
    ApproveSolicitationModalComponent
  ]
})
export class SharedModule { }