import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardVacacyComponent } from './card-vacacy/card-vacacy.component';
import { CardProfessionalComponent } from './card-professional/card-professional.component';



@NgModule({
  declarations: [
    AddressComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CardDetailsComponent,
    CardVacacyComponent,
    CardProfessionalComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    AddressComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CardDetailsComponent,
    CardVacacyComponent
  ]
})
export class SharedModule { }
