import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from '../types';
import { fakeMenu } from '../fake-data';

@Component({
  selector: 'app-detailed-order',
  templateUrl: './detailed-order.component.html',
  styleUrls: ['./detailed-order.component.css']
})
export class DetailedOrderComponent implements OnInit {
  customerName: string = '';
  orderNum: string = '';
  message: string = '';
  menu: Menu | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.openModal();
    const id = this.route.snapshot.paramMap.get('id');
    this.menu = fakeMenu.find(menu => menu.id === id);
    this.message = `Order ${this.orderNum} from ${this.customerName}`;
  }

  openModal(): void {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.result.then(
      (result) => {
        // Handle the result if needed
        console.log(result);
      },
      (reason) => {
        // Handle the dismissal reason if needed
        console.log(reason);
      }
    );

  sendMessage(): void {
    alert('🍽️ **Order Received! Fresh Ingredients at Work!** 🎉\nExciting news! Your order is in motion! 🌱 \nOur team is busy sourcing the freshest ingredients, crafting a culinary masterpiece just for you. \nGet ready for an unforgettable dining experience! \nBon appétit! 😊🍴');
    this.router.navigateByUrl('/menu');
   //TODO: Show this message while the food is being cooked.
    // alert('🍽️ **Exciting News! Your Food Order is Being Prepared!** 🎉 \n Your order is in safe hands! Our skilled team is meticulously selecting the freshest ingredients to craft your culinary masterpiece. 🌱🥦🍅 \nBehind the scenes, our talented chefs are passionately curating a symphony of flavors, ensuring that every bite exceeds your expectations. 🍽️✨\nGet ready to embark on a sensational gastronomic journey, where taste and quality unite to create an unforgettable dining experience. Bon appétit! 😊🍴')
  }

}