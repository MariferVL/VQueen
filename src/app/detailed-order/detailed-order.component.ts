import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../types';
import { fakeMenu } from '../fake-data';
import { MatDialog } from '@angular/material/dialog';
import { UsernameModalComponent } from '../username-modal/username-modal.component';


@Component({
  selector: 'app-detailed-order',
  templateUrl: './detailed-order.component.html',
  styleUrls: ['./detailed-order.component.css']
})


export class DetailedOrderComponent implements OnInit {
  coustumer: string = '';
  orderNum: string = '';
  message: string = '';
  menu: Menu | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.openModal();
    const id = this.route.snapshot.paramMap.get('id');
    this.menu = fakeMenu.find(menu => menu.id === id);
    this.message = `Order ${this.orderNum} from ${this.coustumer}}`;
  }

  openModal(): void {
    const dialogRef = this.dialog.open(UsernameModalComponent, {
      width: '500px'
    });
  }

  confirmOrder(): void {
    const dialogRef = this.dialog.open(UsernameModalComponent, {
      width: '500px'
    });
    this.router.navigateByUrl('/order-received');
   //TODO: Show this message while the food is being cooked.
    // alert('🍽️ **Exciting News! Your Food Order is Being Prepared!** 🎉 \n Your order is in safe hands! Our skilled team is meticulously selecting the freshest ingredients to craft your culinary masterpiece. 🌱🥦🍅 \nBehind the scenes, our talented chefs are passionately curating a symphony of flavors, ensuring that every bite exceeds your expectations. 🍽️✨\nGet ready to embark on a sensational gastronomic journey, where taste and quality unite to create an unforgettable dining experience. Bon appétit! 😊🍴')
  }

}

