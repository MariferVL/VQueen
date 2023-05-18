import { Component, OnInit } from '@angular/core';
import { Menu } from '../types';
import { fakeMenu } from '../fake-data';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  menus: Menu[] = [];

  constructor(
    private titleService: Title
    ) {}

  ngOnInit() {
    this.titleService.setTitle('VQ - Menu');
    this.menus = fakeMenu;
  }
}
// import { Component, OnInit } from '@angular/core';
// import { Title } from '@angular/platform-browser';
// import { MenuService } from '../services/menu.service';

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent implements OnInit {
//   menus: any[] = [];

//   constructor(
//     private titleService: Title,
//     private menuService: MenuService
//   ) { }

//   ngOnInit(): void {
//     this.titleService.setTitle('VQ - Menu');
//     this.getProducts();
//   }

//   getProducts(): void {
//     //FIXME: cómo imprimo todas las páginas. Cómo se cuántas son?
//     const page = 1; 
//     const limit = 30; 

//     this.menuService.getProducts(page, limit).subscribe({
//       next: (response: any) => {
//         this.menus = response;
//         console.log('this.menus: ', this.menus);
        
//       },
//       error: (error: any) => {
//         console.error(error);
//       }
//     });
//   }
// }
