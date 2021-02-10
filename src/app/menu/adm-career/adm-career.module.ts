import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmCareerRoutingModule } from './adm-career-routing.module';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import {
    NbAccordionModule, NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbListModule,
    NbSelectModule, NbSpinnerModule, NbTreeGridModule,
    NbUserModule
} from '@nebular/theme';
import { EditComponent } from './add-vacancy/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddVacancyComponent, ViewApplicationComponent, EditComponent],
  entryComponents: [
    EditComponent,
  ],
    imports: [
        CommonModule,
        AdmCareerRoutingModule,
        NbCardModule,
        NbInputModule,
        NbDatepickerModule,
        NbButtonModule,
        NbSelectModule,
        NbListModule,
        NbUserModule,
        NbAccordionModule,
        NbIconModule,
        NbActionsModule,
        NbTreeGridModule,
        FormsModule,
        ReactiveFormsModule,
        NbSpinnerModule
    ]
})
export class AdmCareerModule { }
