import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailedMenuComponent } from './detailed-menu/detailed-menu.component';
import { DetailedOrderComponent } from './detailed-order/detailed-order.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ReadyComponent } from './ready/ready.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { UsernameModalComponent } from './username-modal/username-modal.component';
import { OrderModalComponent } from './order-modal/order-modal.component';
import { OrderReceivedComponent } from './order-received/order-received.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DetailedMenuComponent,
    DetailedOrderComponent,
    KitchenComponent,
    ReadyComponent,
    LocationsComponent,
    ContactComponent,
    UsernameModalComponent,
    OrderModalComponent,
    OrderReceivedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
