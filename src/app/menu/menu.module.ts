import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import {MenuRoutingModule} from './menu-routing.module';
import {
    NbAccordionModule, NbActionsModule,
    NbButtonModule,
    NbCardModule, NbCheckboxModule, NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbMenuModule,
    NbRadioModule, NbSelectModule, NbSpinnerModule, NbStepperModule, NbUserModule
} from '@nebular/theme';
import {NbThemeModule} from '@nebular/theme';
import {EmployeeModule} from './employee/employee.module';
import { AdmServiceModule} from './admservices/admservice.module';
import { AdmEventComponent } from './adm-event/adm-event.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {NgZorroAntdModule, NzCarouselModule} from 'ng-zorro-antd';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { AdmvendorComponent } from './admvendor/admvendor.component';
import { SettingsComponent } from './settings/settings.component';
import {AdvendorModule} from './admvendor/advendor.module';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { AdmInventoryComponent } from './adm-inventory/adm-inventory.component';
import { AdmVehicleComponent } from './adm-vehicle/adm-vehicle.component';
import {ChartModule} from 'angular2-chartjs';
import {ContactComponent} from './contact/contact.component';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { AdmCareerComponent } from './adm-career/adm-career.component';
import { EventsComponent } from './events/events.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    AdmEventComponent,
    NotFoundComponent,
    AdmvendorComponent,
    SettingsComponent,
    EventsComponent,
    VendorProfileComponent,
    AdmInventoryComponent,
    AdmVehicleComponent,
    AdmCareerComponent,
    EventsComponent,
    EventFormComponent,
    VendorProfileComponent


  ],
    imports: [
        CommonModule,

        MenuRoutingModule,
        NbThemeModule,
        AdmServiceModule,
        AdvendorModule,
        NbMenuModule,
        NbIconModule,
        EmployeeModule,
        NbCardModule,
        NbButtonModule,
        NzCarouselModule,
        NgZorroAntdModule,
        CarouselModule,
        ChartModule,
        NbInputModule,
        NbRadioModule,
        ButtonModule,
        ConfirmDialogModule,
        NbAccordionModule,
        NbListModule,
        NbUserModule,
        NbActionsModule,
        NbSelectModule,
        NbStepperModule,
        ReactiveFormsModule,
        FormsModule,
        NbSpinnerModule,
        NbCheckboxModule,
        NbDatepickerModule,


    ]
})
export class MenuModule { }
