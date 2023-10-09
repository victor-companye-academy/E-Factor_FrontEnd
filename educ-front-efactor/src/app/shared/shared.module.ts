import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';



@NgModule({
  declarations: [
    AddressComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    AddressComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
