import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStatsComponent } from './inventory-stats.component';

describe('InventoryStatsComponent', () => {
  let component: InventoryStatsComponent;
  let fixture: ComponentFixture<InventoryStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
