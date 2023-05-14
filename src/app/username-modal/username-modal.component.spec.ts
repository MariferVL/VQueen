import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameModalComponent } from './username-modal.component';

describe('UsernameModalComponent', () => {
  let component: UsernameModalComponent;
  let fixture: ComponentFixture<UsernameModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsernameModalComponent]
    });
    fixture = TestBed.createComponent(UsernameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
