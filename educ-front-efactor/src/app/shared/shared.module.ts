import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';



@NgModule({
  declarations: [
    AddressComponent,
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
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CardDetailsComponent
  ]
})
export class SharedModule { }
