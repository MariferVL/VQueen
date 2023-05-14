import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailedMenuComponent } from './detailed-menu/detailed-menu.component';
import { DetailedOrderComponent } from './detailed-order/detailed-order.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ReadyComponent } from './ready/ready.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch:'full' },
  { path: 'menu', component: MenuComponent},
  { path: 'menu/:id', component: DetailedMenuComponent},
  { path: 'order', component: DetailedOrderComponent},
  { path: 'kitchen', component: KitchenComponent},
  { path: 'ready', component: ReadyComponent},
  { path: 'locations', component: LocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
