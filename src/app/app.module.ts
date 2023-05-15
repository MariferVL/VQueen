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
import { ManagerComponent } from './manager/manager.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { EmployeesAdminComponent } from './employees-admin/employees-admin.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MenuFormComponent } from './menu-form/menu-form.component';


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
    EditMenuComponent,
    ManagerComponent,
    MenuAdminComponent,
    EmployeesAdminComponent,
    EditEmployeeComponent,
    NotFoundComponent,
    AddProductComponent,
    MenuFormComponent,
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
