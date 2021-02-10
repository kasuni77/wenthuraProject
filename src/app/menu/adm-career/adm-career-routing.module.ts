import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdmCareerComponent} from './adm-career.component';
import {AddVacancyComponent} from './add-vacancy/add-vacancy.component';
import {ViewApplicationComponent} from './view-application/view-application.component';


const routes: Routes = [
  {

    path: '',
    component: AdmCareerComponent,
    children: [

      {
        path: 'add-vac',
        component: AddVacancyComponent,
      },
      {
        path: 'view-app',
        component: ViewApplicationComponent,

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
export class AdmCareerRoutingModule { }
