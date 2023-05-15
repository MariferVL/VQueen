import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFormComponent } from './menu-form.component';

describe('MenuFormComponent', () => {
  let component: MenuFormComponent;
  let fixture: ComponentFixture<MenuFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuFormComponent]
    });
    fixture = TestBed.createComponent(MenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
