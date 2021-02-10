import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdmMeetingComponent} from './adm-meeting/adm-meeting.component';
import {AdmEventComponent} from './adm-event.component';
import {AdmEventViewComponent} from './adm-event-view/adm-event-view.component';

const routes: Routes = [ {

  path: '',
  component: AdmEventComponent,
  children: [

    {
      path: 'view-event',
      component: AdmEventViewComponent,
    },
    {
      path: 'adm-meet',
      component: AdmMeetingComponent,

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
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmEventRoutingModule { }
