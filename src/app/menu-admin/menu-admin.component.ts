import { Component } from '@angular/core';
import { fakeMenu } from '../fake-data';
import { Menu } from '../types';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {
  menus: Menu [] = [];

  constructor(
    private titleService: Title
    ) {}

  ngOnInit() {
    this.titleService.setTitle('VQAdmin - Menu Data');
    this.menus = fakeMenu;
  }

  onDeleteClicked(menuId: string): void {
    alert(`Deleting your dish with id ${menuId}`)
  }
}
