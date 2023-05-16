import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailedMenuComponent } from './detailed-menu/detailed-menu.component';
import { DetailedOrderComponent } from './detailed-order/detailed-order.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ReadyComponent } from './ready/ready.component';
import { LocationsComponent } from './locations/locations.component';
import { OrderReceivedComponent } from './order-received/order-received.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeesAdminComponent } from './employees-admin/employees-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:id', component: DetailedMenuComponent },
  { path: 'order', component: DetailedOrderComponent },
  { path: 'order-received', component: OrderReceivedComponent },
  { path: 'ready', component: ReadyComponent },
  {
    path: 'admin',
    component: ManagerComponent,
    children: [
      { path: 'employees', component: EmployeesAdminComponent, 
      children: [
        { path: 'edit/:id', component: EditEmployeeComponent },
      ], },
      { path: 'menu', component: MenuAdminComponent,
      children: [
        { path: 'edit/:id', component: EditMenuComponent },
        { path: 'add-product', component: AddProductComponent },
      ], },
    ],
  },
  // Add a wildcard route to handle unknown URLs
  { path: '**',  component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
