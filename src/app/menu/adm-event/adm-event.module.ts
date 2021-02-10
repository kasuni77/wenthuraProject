import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmEventRoutingModule } from './adm-event-routing.module';
import { AdmEventViewComponent } from './adm-event-view/adm-event-view.component';
import { AdmMeetingComponent } from './adm-meeting/adm-meeting.component';
import {
  NbAccordionModule,
  NbActionsModule, NbButtonModule,
  NbCardModule, NbIconModule, NbInputModule,
  NbListModule,
  NbSpinnerModule, NbTooltipModule,
  NbTreeGridModule,
  NbUserModule
} from '@nebular/theme';


@NgModule({
  declarations: [AdmEventViewComponent, AdmMeetingComponent],
  imports: [
    CommonModule,
    AdmEventRoutingModule,
    NbSpinnerModule,
    NbCardModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    NbActionsModule,
    NbTreeGridModule,
    NbInputModule,
    NbTooltipModule,
    NbButtonModule,
    NbIconModule
  ]
})
export class AdmEventModule { }
