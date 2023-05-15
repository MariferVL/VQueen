import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent {
  constructor(
    public confirmRef: MatDialogRef<OrderModalComponent>,
  ) { }

  submitOrder(): void {
    console.log('Order Submitted to Kitchen👩🏻‍🍳👨🏻‍🍳');
    // Close the modal
    const result = 'confirm';
    this.confirmRef.close(result);
  }

  close(): void {
    this.confirmRef.close();
  }

}
