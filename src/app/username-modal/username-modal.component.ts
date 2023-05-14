import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './username-modal.component.html',
  styleUrls: ['./username-modal.component.css']
})
export class UsernameModalComponent {
  public customerName: string = '';

  constructor(
    public dialogRef: MatDialogRef<UsernameModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  submitCustomerName(): void {
    console.log('Submitted Customer Name:', this.customerName);
    this.dialogRef.close(this.customerName);
  }

  close(): void {
    this.dialogRef.close();
  }

}
