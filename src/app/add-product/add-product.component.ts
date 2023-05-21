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

  onSubmit({ name, imgRelPath, description, ingredients, allergens, price }:
    { name: string, imgRelPath: string, description: string, ingredients: string, allergens: string, price: number }): void {
    this.adminService.createMenu(name, imgRelPath, description, ingredients, allergens, price)
      .subscribe(() => {
        this.router.navigateByUrl('/admin/menu');
        console.log('Creating a new delicacy.👑');
      });
  }


}

