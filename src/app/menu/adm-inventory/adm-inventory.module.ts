import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmInventoryRoutingModule } from './adm-inventory-routing.module';
import { RegisterVehicleComponent } from '../adm-vehicle/register-vehicle/register-vehicle.component';
import { RegisterInventoryComponent } from './register-inventory/register-inventory.component';
import { InventoryStatsComponent } from './inventory-stats/inventory-stats.component';
import {NbButtonModule, NbCardModule, NbInputModule} from '@nebular/theme';


@NgModule({
  declarations: [RegisterVehicleComponent, RegisterInventoryComponent, InventoryStatsComponent],
  imports: [
    CommonModule,
    AdmInventoryRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class AdmInventoryModule { }
