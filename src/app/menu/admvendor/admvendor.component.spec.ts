import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmvendorComponent } from './admvendor.component';

describe('AdmvendorComponent', () => {
  let component: AdmvendorComponent;
  let fixture: ComponentFixture<AdmvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmvendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
