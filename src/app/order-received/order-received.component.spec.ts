import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReceivedComponent } from './order-received.component';

describe('OrderReceivedComponent', () => {
  let component: OrderReceivedComponent;
  let fixture: ComponentFixture<OrderReceivedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderReceivedComponent]
    });
    fixture = TestBed.createComponent(OrderReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
