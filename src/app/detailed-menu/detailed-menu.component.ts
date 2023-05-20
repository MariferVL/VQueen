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
  menu: Menu | undefined; // Declare menu as a single Menu object, not an array
  foodImg: string = 'assets/Images/sopaipilla.png'; 

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private titleService: Title,
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('VQ - Add Product');
    const id = this.route.snapshot.paramMap.get('id') as string;
    console.log("id: ",id);
    
    this.adminService.getMenusById(id)
    .subscribe(menu => {
      console.log("suscrib1 id: ",id);

      this.menu = menu;
      this.isLoading = false;
    });
  
    this.adminService.addSaleToMenu(id)
    .subscribe(()  => console.log('Sales updated'));
  }
}
