import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedMenuComponent } from './detailed-menu.component';

describe('DetailedMenuComponent', () => {
  let component: DetailedMenuComponent;
  let fixture: ComponentFixture<DetailedMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedMenuComponent]
    });
    fixture = TestBed.createComponent(DetailedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
