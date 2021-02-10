import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInventoryComponent } from './register-inventory.component';

describe('RegisterInventoryComponent', () => {
  let component: RegisterInventoryComponent;
  let fixture: ComponentFixture<RegisterInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
