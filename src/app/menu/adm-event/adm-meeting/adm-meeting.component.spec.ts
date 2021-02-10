import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMeetingComponent } from './adm-meeting.component';

describe('AdmMeetingComponent', () => {
  let component: AdmMeetingComponent;
  let fixture: ComponentFixture<AdmMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
