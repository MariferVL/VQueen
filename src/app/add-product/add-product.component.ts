import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
 
  constructor(
    private router: Router,
    private titleService: Title,
    private adminService: AdminService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('VQAdmin - Add Product');
  }

  onSubmit({ name, description, ingredients, allergens, price }: 
    { name: string, description: string, ingredients: string, allergens: string, price: number }): void {
    this.adminService.createMenu(name, description, ingredients, allergens, price)
      .subscribe(() => {
        this.router.navigateByUrl('/menu');
      });
    console.log('Creating a new delicacy.👑');
    this.router.navigateByUrl('/admin/menu');
  }
  

}

