import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvendorRoutingModule } from './advendor-routing.module';
import { RegvendorComponent } from './regvendor/regvendor.component';
import {FormsModule} from "@angular/forms";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbSelectModule, NbSpinnerModule,
  NbUserModule
} from "@nebular/theme";
import {NzIconModule, NzUploadModule} from "ng-zorro-antd";



@NgModule({
  declarations: [RegvendorComponent],
  imports: [
    CommonModule,
    AdvendorRoutingModule,
    FormsModule,
    NbCardModule,
    NzUploadModule,
    NzIconModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    NbListModule,
    NbUserModule,
    NbIconModule,
    NbActionsModule,
    NbSpinnerModule
  ]
})
export class AdvendorModule { }
