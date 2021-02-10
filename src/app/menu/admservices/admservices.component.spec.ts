import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmServicesComponent } from './admservices.component';

describe('AdmServicesComponent', () => {
  let component: AdmServicesComponent;
  let fixture: ComponentFixture<AdmServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
