import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyComponent } from './ready.component';

describe('ReadyComponent', () => {
  let component: ReadyComponent;
  let fixture: ComponentFixture<ReadyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadyComponent]
    });
    fixture = TestBed.createComponent(ReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
