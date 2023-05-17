import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../types';
import { fakeMenu } from '../fake-data';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detailed-menu',
  templateUrl: './detailed-menu.component.html',
  styleUrls: ['./detailed-menu.component.css']
})
export class DetailedMenuComponent implements OnInit {
  menu: Menu | undefined; // Declare menu as a single Menu object, not an array
  foodImg: string = 'assets/Images/sopaipilla.png'; 

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('VQ - Add Product');
    const id = this.route.snapshot.paramMap.get('id');
    this.menu = fakeMenu.find(menu => menu.id === id);
  }
}
