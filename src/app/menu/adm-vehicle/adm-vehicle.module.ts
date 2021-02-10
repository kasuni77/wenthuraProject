import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmVehicleRoutingModule } from './adm-vehicle-routing.module';
import { VehicleStatsComponent } from './vehicle-stats/vehicle-stats.component';


@NgModule({
  declarations: [VehicleStatsComponent],
  imports: [
    CommonModule,
    AdmVehicleRoutingModule
  ]
})
export class AdmVehicleModule { }
