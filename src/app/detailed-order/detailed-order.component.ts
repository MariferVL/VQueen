import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, CustomerData } from '../data.service';
import { Menu } from '../types';
import { fakeMenu } from '../fake-data';
import { MatDialog } from '@angular/material/dialog';
import { UsernameModalComponent } from '../username-modal/username-modal.component';
import { OrderModalComponent } from '../order-modal/order-modal.component';


@Component({
  selector: 'app-detailed-order',
  templateUrl: './detailed-order.component.html',
  styleUrls: ['./detailed-order.component.css']
})


export class DetailedOrderComponent implements OnInit {
  customerName: string = '';
  currentUserData: CustomerData[] = [];
  message: string = '';
  menu: Menu | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.menu = fakeMenu.find(menu => menu.id === id);
    this.currentUserData = this.dataService.getCustomerData();
    console.log('currentUserData: ', this.currentUserData);
    
    // this.message = `Order ${this.orderNum} from ${this.customerName}`;
    this.checkCustomerName();
  }

  checkCustomerName(): void {
    const storedName = localStorage.getItem('customerName');
    if (storedName) {
      this.customerName = storedName;
    } else {
      this.openModal();
    }
  }

  openModal(): void {
    const dialogRef = this.dialog.open(UsernameModalComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Add the customer data to the DataService
        this.dataService.addCustomerData(result);

        // this.customerName = this.dataService.getCustomerName();
      }
    });
  }


  confirmOrder(): void {
    const confirmRef = this.dialog.open(OrderModalComponent, {
      width: '1100px'
    });

    confirmRef.afterClosed().subscribe(() => {
      // Perform any necessary actions after the order is confirmed
      // For example, you can display a success message or navigate to a different page
      this.router.navigateByUrl('/order-received');
    });
  }

  //TODO: Show this message while the food is being cooked.
  // alert('🍽️ **Exciting News! Your Food Order is Being Prepared!** 🎉 \n Your order is in safe hands! Our skilled team is meticulously selecting the freshest ingredients to craft your culinary masterpiece. 🌱🥦🍅 \nBehind the scenes, our talented chefs are passionately curating a symphony of flavors, ensuring that every bite exceeds your expectations. 🍽️✨\nGet ready to embark on a sensational gastronomic journey, where taste and quality unite to create an unforgettable dining experience. Bon appétit! 😊🍴')



}

