import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegvendorComponent } from './regvendor.component';

describe('RegvendorComponent', () => {
  let component: RegvendorComponent;
  let fixture: ComponentFixture<RegvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegvendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
