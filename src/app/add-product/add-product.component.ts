import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  menu: {
    id: string,
    name: string,
    description: string,
    ingredients: string[],
    allergens: string[],
    price: number
  } = {
    id: '',
    name: '',
    description: '',
    ingredients: [],
    allergens: [],
    price: 0
  };
  ingredientsString: string = '';
  allergensString: string = '';

  constructor(
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('VQAdmin - Add Product');
  }

  onSubmit(): void {
    this.menu.id = this.generateUniqueId(); 
    this.menu.ingredients = this.ingredientsString.split(',');
    this.menu.allergens = this.allergensString.split(',');
    //TODO: save the data
    console.log('Creating a new delicacy: ', this.menu);
    this.router.navigateByUrl('/admin/menu')
  }
/**
 * Generate unique id based on timestamp
 * @returns string 
 */
  private generateUniqueId(): string { 
    const timestamp = Date.now().toString(36); 
    const randomString = Math.random().toString(36).substring(2, 5);
    return timestamp + randomString;
  }
}

