import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdminService } from '../admin.service';
import { Menu } from '../types';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {
  menus: Menu [] = [];

  constructor(
    private titleService: Title,
    private adminService: AdminService,
    ) {}

  ngOnInit() {
    this.titleService.setTitle('VQAdmin - Menu Data');
    this.adminService.getMenus()
    .subscribe(menus => this.menus = menus)
  }

  onDeleteClicked(menuId: string): void {
    this.adminService.deleteMenu(menuId)
    .subscribe(() => {
      this.menus = this.menus.filter(
        menu => menu.idmenu !== menuId
      )
    })
  }
}
