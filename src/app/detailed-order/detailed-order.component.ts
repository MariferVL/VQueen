import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../types';
import { fakeMenu } from '../fake-data';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsernameModalComponent } from '../username-modal/username-modal.component';
import { OrderModalComponent } from '../order-modal/order-modal.component';


@Component({
  selector: 'app-detailed-order',
  templateUrl: './detailed-order.component.html',
  styleUrls: ['./detailed-order.component.css']
})


export class DetailedOrderComponent implements OnInit {
  customerName: string = '';
  message: string = '';
  menu: Menu | undefined;
  orderDate: Date = new Date();
  orderNum: string = '';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.menu = fakeMenu.find(menu => menu.id === id);    
    this.checkCustomerName();
  }

  checkCustomerName(): void {
    console.log('entró a checkCustomerName');

    const storedName = localStorage.getItem('customerName');
    if (storedName) {
      console.log('entró a if');
      
      this.customerName = storedName;
    } else {
      console.log('entró a else');

      this.openModal();
    }
  }

  openModal(): void {
    const dialogRef: MatDialogRef<UsernameModalComponent> = this.dialog.open(UsernameModalComponent, {
      width: '500px',
    });
  
    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.customerName = result;
        localStorage.setItem('customerName', this.customerName);
      }
    });
  }
  
  confirmOrder(): void {
    const confirmRef = this.dialog.open(OrderModalComponent, {
      width: '1100px'
    });
  
    confirmRef.afterClosed().subscribe(() => {      
      this.orderNum = this.generateOrderNumber();
      this.orderDate = new Date();
      this.message = `Order ${this.orderNum} from ${this.customerName}`;
      console.log('msg: ',this.message);
      
      this.router.navigateByUrl('/order-received');
    });
  }
  
  generateOrderNumber(): string {
    const timestamp = new Date().getTime();
    return `#VQ${timestamp}`;
  }
  

  //TODO: Show this message while the food is being cooked.
  // alert('🍽️ **Exciting News! Your Food Order is Being Prepared!** 🎉 \n Your order is in safe hands! Our skilled team is meticulously selecting the freshest ingredients to craft your culinary masterpiece. 🌱🥦🍅 \nBehind the scenes, our talented chefs are passionately curating a symphony of flavors, ensuring that every bite exceeds your expectations. 🍽️✨\nGet ready to embark on a sensational gastronomic journey, where taste and quality unite to create an unforgettable dining experience. Bon appétit! 😊🍴')



}

