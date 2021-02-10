import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeRoutingModule} from './employee-routing.module';
import {EmpRegisterComponent} from './emp-register/emp-register.component';
import {EmpViewComponent} from './emp-view/emp-view.component';
import {EmployeeComponent} from './employee.component';
import {
  NbActionsModule, NbButtonModule,
  NbCardModule, NbContextMenuModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule, NbSelectModule,
  NbSidebarModule,
  NbUserModule
} from '@nebular/theme';

import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbIconModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';

@NgModule({
  declarations: [
    EmpViewComponent,
    EmployeeComponent,
    EmpRegisterComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule
  ]
})
export class EmployeeModule { }
