import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardVacacyComponent } from './card-vacacy/card-vacacy.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddressComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CardDetailsComponent,
    CardVacacyComponent
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
    CardVacacyComponent
  ]
})
export class SharedModule { }