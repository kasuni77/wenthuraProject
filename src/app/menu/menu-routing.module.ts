import { NgModule } from '@angular/core';
import { HomeComponent} from './home/home.component';
import {MenuComponent} from './menu.component';
import {ServicesComponent} from './services/services.component';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {EmployeeComponent} from './employee/employee.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {VendorProfileComponent} from './vendor-profile/vendor-profile.component';
import {AdmVehicleComponent} from './adm-vehicle/adm-vehicle.component';
import {EventsComponent} from './events/events.component';
import {EventFormComponent} from './events/event-form/event-form.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {

    path: '',

    component: MenuComponent,

    children: [

      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,

      },
      {
        path: 'contact',
        component: ContactComponent,

      },
      {
        path: 'settings',
        component: SettingsComponent,

      },
      {
        path: 'vendor-profile',
        component: VendorProfileComponent,

      },
      {
        path: 'event',
        component: EventsComponent,

      },
      {
        path: 'event-form',
        component: EventFormComponent,

      },
      {
        path: 'event-form/:id',
        component: EventFormComponent,

      },
      {
        path: 'null',
        component: NotFoundComponent,

      },
      {
        path: 'employee',

        loadChildren: () => import('./employee/employee.module')

          .then(m => m.EmployeeModule),

      },
      {
        path: 'adm-event',

        loadChildren: () => import('./adm-event/adm-event.module')

          .then(m => m.AdmEventModule),

      },
      {
        path: 'adm-vendor',

        loadChildren: () => import('./admvendor/advendor.module')

          .then(m => m.AdvendorModule),

      },
      {
        path: 'adm-inventory',

        loadChildren: () => import('./adm-inventory/adm-inventory.module')

          .then(m => m.AdmInventoryModule),

      },
      {
        path: 'adm-vehicle',

        loadChildren: () => import('./adm-vehicle/adm-vehicle.module')

          .then(m => m.AdmVehicleModule),

      },
      {
        path: 'adm-services',

        loadChildren: () => import('./admservices/admservice.module')

          .then(m => m.AdmServiceModule),

      },
      {
        path: 'adm-career',

        loadChildren: () => import('./adm-career/adm-career.module')

          .then(m => m.AdmCareerModule),

      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',

      },

      {

        path: '**',
        redirectTo: 'null',

      }

  ]
  }

];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],

})
export class MenuRoutingModule { }
