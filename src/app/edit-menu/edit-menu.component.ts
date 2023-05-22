import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../types';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {
  menu: Menu | undefined;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
  ) { }

  /**
   * Lifecycle hook to fetch the menu details. 
   * Ensures that the component has finished initializing and 
   * the view is rendered before making the API call.
   */
  ngOnInit(): void  {
    this.titleService.setTitle('VQAdmin - Edit Menu');
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.adminService.getMenusById(id)
      .subscribe(menu => this.menu = menu);
  }

  onSubmit({ name, imgRelPath, description, ingredients, allergens, price }:{ name: string, imgRelPath: string, description: string, ingredients: string, allergens: string, price: number }): void {
    if (this.menu) {
      console.log('menu: ', this.menu.name, this.menu.description, this.menu.price);

      this.adminService.editMenu(this.menu.idmenu, name, imgRelPath, description, ingredients, allergens, price)
        .subscribe(() => {
          console.log('Saving changes');  
          //TODO: PREGUNTA: Esto es apropiado? Porque funciona😅       
          window.location.href = '/admin/menu';
        });
    }
  }
}
