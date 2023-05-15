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
  id: string = '';
  name: string = '';
  description: string = '';
  ingredients: string[] = [];
  allergens: string[] = [];
  price: number = 0;
  ingredientsString: string = '';
  allergensString: string = '';

  @Output() onSubmit = new EventEmitter<Menu>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.onSubmit.emit({
      id: this.generateUniqueId(),
      name: this.name,
      description: this.description,
      ingredients: this.ingredientsString.split(','),
      allergens: this.allergensString.split(','),
      price: Number(this.price),
    }

  )}

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
