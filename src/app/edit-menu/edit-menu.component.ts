import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../types';
import { fakeMenu } from '../fake-data';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent {
  menu: Menu = {
    id: '',
    name: '',
    description: '',
    ingredients: [],
    allergens: [],
    price: 0,
    sales: 0
  };
  
  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
    this.titleService.setTitle('VQAdmin - Edit Menu');
    const id = this.route.snapshot.paramMap.get('id');
    this.menu = fakeMenu.find(menu => menu.id === id) as Menu;
    }

  onSubmit(): void {
    console.log('Saving changes');
    this.router.navigateByUrl('/admin/menu');
  }

}
