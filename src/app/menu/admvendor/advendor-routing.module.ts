import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdmvendorComponent} from './admvendor.component';
import {RegvendorComponent} from './regvendor/regvendor.component';


const routes: Routes = [
  {

    path: '',
    component: AdmvendorComponent,
    children: [

      {
        path: 'reg-ven',
        component: RegvendorComponent,

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
export class AdvendorRoutingModule { }
