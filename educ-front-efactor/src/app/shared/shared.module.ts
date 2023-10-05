import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/FooterComponent';



@NgModule({
  declarations: [
    AddressComponent,
    CardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AddressComponent, CardComponent, HeaderComponent, SidebarComponent,FooterComponent]
})
export class SharedModule { }
