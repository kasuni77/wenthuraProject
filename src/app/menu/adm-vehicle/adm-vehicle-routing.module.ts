import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdmVehicleComponent} from './adm-vehicle.component';
import {RegisterVehicleComponent} from './register-vehicle/register-vehicle.component';
import {VehicleStatsComponent} from './vehicle-stats/vehicle-stats.component';
const routes: Routes = [
  {

    path: '',
    component: AdmVehicleComponent,
    children: [

      {
        path: 'reg-veh',
        component: RegisterVehicleComponent,
      },
      {
        path: 'veh-stat',
        component: VehicleStatsComponent,

      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',

      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmVehicleRoutingModule { }
