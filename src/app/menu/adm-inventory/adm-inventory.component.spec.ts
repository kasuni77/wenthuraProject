import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmInventoryComponent } from './adm-inventory.component';

describe('AdmInventoryComponent', () => {
  let component: AdmInventoryComponent;
  let fixture: ComponentFixture<AdmInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
