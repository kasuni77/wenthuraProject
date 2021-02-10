import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdmServicesComponent} from './admservices.component';
import {ViewServicesComponent} from './view-services/view-services.component';
import {AddServicesComponent} from './add-services/add-services.component';

const routes: Routes = [
  {

    path: '',
    component: AdmServicesComponent,
    children: [

      {
        path: 'view-serv',
        component: ViewServicesComponent
      },
      {
        path: 'add-serv',
        component: AddServicesComponent,

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
export class AdmServiceRoutingModule { }
