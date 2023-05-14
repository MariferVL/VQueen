import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private customerData: CustomerData[] = [];
  private customerName: string = '';
  private currentOrderNumber = 1;


  constructor() { }

  getCustomerData(): CustomerData[] {
    return this.customerData;
  }

  addCustomerData(customerName: string): void {
    const customerData: CustomerData = {
      customerName,
      orderNumber: `ORD${this.currentOrderNumber}`,
      timestamp: new Date()
    };
    this.customerData.push(customerData);
    this.currentOrderNumber++;  }

  getCustomerName(): string {
    return this.customerName;
  }

  setCustomerName(customerName: string): void {
    this.customerName = customerName;
  }
}

export interface CustomerData {
  customerName: string;
  orderNumber: string;
  timestamp: Date;
}

