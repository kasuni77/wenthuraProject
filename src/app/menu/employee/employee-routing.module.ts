import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpRegisterComponent} from './emp-register/emp-register.component';
import {EmpViewComponent} from './emp-view/emp-view.component';
import {EmployeeComponent} from './employee.component';

const routes: Routes = [
  {

    path: '',
    component: EmployeeComponent,
    children: [

      {
        path: 'emp-reg',
        component: EmpRegisterComponent
      },
      {
        path: 'emp-view',
        component: EmpViewComponent,

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
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class EmployeeRoutingModule { }
