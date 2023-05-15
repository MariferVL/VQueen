import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent {
  constructor(
    private titleService: Title
    ) {}

  ngOnInit() {
    this.titleService.setTitle('VQ - Ready!');
  }
}
