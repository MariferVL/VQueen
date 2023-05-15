import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  constructor(
    private titleService: Title
    ) {}

  ngOnInit() {
    this.titleService.setTitle('Ups - Out of the queendom');
  }

}
