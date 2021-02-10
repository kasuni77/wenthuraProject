import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEventViewComponent } from './adm-event-view.component';

describe('AdmEventViewComponent', () => {
  let component: AdmEventViewComponent;
  let fixture: ComponentFixture<AdmEventViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmEventViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
