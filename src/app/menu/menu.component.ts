import { Component, OnInit } from '@angular/core';
import { Menu } from '../types';
import { Title } from '@angular/platform-browser';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  isLoading: boolean = true;
  menus: Menu[] = [];

  constructor(
    private titleService: Title,
    private AdminService: AdminService,
    ) {}

  ngOnInit() {
    this.titleService.setTitle('VQ - Menu');
    this.AdminService.getMenus()
    .subscribe(menus => {
      this.menus = menus;
      this.isLoading = false;
    });
  }
}