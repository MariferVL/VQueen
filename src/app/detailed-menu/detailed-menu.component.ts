import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Menu } from '../types';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detailed-menu',
  templateUrl: './detailed-menu.component.html',
  styleUrls: ['./detailed-menu.component.css']
})
export class DetailedMenuComponent implements OnInit {
  isLoading: boolean = true;
  menu: Menu = {
    idmenu: '',
    name: '',
    imgRelPath: '',
    description: '',
    ingredients: '',
    allergens: '',
    price: 0,
    sales: 0
  }; 
  foodImg: string = 'assets/Images/';


  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private titleService: Title,
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('VQ - Add Product');
    const id = this.route.snapshot.paramMap.get('id') as string;
    
    this.adminService.getMenusById(id)
    .subscribe(menu => {
      this.menu = menu;
      this.foodImg += this.menu.imgRelPath;
      this.isLoading = false;
    });
  
    this.adminService.addSaleToMenu(id)
    .subscribe(()  => console.log('Sales updated'));
  }
}
