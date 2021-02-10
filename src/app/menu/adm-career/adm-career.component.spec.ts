import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCareerComponent } from './adm-career.component';

describe('AdmCareerComponent', () => {
  let component: AdmCareerComponent;
  let fixture: ComponentFixture<AdmCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCareerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
