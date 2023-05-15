import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
  constructor(
    private titleService: Title
    ) {}

  ngOnInit() {
    this.titleService.setTitle('VQ - Royal Kitchen');
  }
}
