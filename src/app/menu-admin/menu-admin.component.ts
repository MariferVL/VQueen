import { Component } from '@angular/core';
import { fakeMenu } from '../fake-data';
import { Menu } from '../types';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {
  menus: Menu [] = [];

  constructor() { }

  ngOnInit(): void {
    this.menus = fakeMenu;
  }

  onDeleteClicked(menuId: string): void {
    alert(`Deleting your dish with id ${menuId}`)
  }
}
