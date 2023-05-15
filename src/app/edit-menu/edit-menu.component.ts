import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent {
  constructor(
    private titleService: Title,
    private router: Router,
    ) {}

  ngOnInit() {
    this.titleService.setTitle('VQAdmin - Edit Menu');
  }

  onSubmit(): void {
    console.log('Saving changes');
    this.router.navigateByUrl('/admin/menu')
  }

}
