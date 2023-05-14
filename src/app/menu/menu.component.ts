import { Component, OnInit } from '@angular/core';
import { Menu } from '../types';
import { fakeMenu } from '../fake-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  menus: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menus = fakeMenu;
  }

}
