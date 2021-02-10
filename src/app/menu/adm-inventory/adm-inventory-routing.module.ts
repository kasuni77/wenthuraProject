import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdmInventoryComponent} from './adm-inventory.component';
import {RegisterInventoryComponent} from './register-inventory/register-inventory.component';
import {InventoryStatsComponent} from './inventory-stats/inventory-stats.component';

const routes: Routes = [
  {

    path: '',
    component: AdmInventoryComponent,
    children: [

      {
        path: 'reg-inv',
        component: RegisterInventoryComponent,
      },
      {
        path: 'inv-stats',
        component: InventoryStatsComponent,

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
export class AdmInventoryRoutingModule { }
