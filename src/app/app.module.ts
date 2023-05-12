import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailedMenuComponent } from './detailed-menu/detailed-menu.component';
import { DetailedOrderComponent } from './detailed-order/detailed-order.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ReadyComponent } from './ready/ready.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    HomeComponent,
    MenuComponent,
    DetailedMenuComponent,
    DetailedOrderComponent,
    KitchenComponent,
    ReadyComponent,
    LocationsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
