import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../types';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  @Input() buttonText: any;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentIngredients= '';
  @Input() currentAllergens= '';
  @Input() currentPrice = 0;

  id: string = '';
  name: string = '';
  description: string = '';
  price: number = 0;
  ingredients: string = '';
  allergens: string = '';

  @Output() onSubmit = new EventEmitter<Menu>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.ingredients = this.currentIngredients;
    this.allergens =this.currentAllergens;
    this.price = this.currentPrice;
  }

  onClick(): void {
    this.onSubmit.emit({
      idmenu: this.generateUniqueId(),
      name: this.name,
      description: this.description,
      ingredients: this.ingredients,
      allergens: this.allergens,
      price: Number(this.price),
      sales: 0,
    });
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
