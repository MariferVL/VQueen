import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
 
  constructor(
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('VQAdmin - Add Product');
  }

  onSubmit(): void {
    console.log('Creating a new delicacy.👑 ');
    this.router.navigateByUrl('/admin/menu')
  }

}

