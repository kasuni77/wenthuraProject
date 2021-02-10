import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Vacancy} from '../../model/vacancy';
import {VacancyService} from '../../services/vacancy.service';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{

   vacancies: Observable<Vacancy[]>;
  visible = false;

   constructor(private vacancyService: VacancyService, private toastrService: NbToastrService,) {

   }
  // tslint:disable-next-line:typedef
  showToast(status: NbComponentStatus, destroyByClick) {
    // @ts-ignore
    this.toastrService.show(status, `Notification`, { status }, { destroyByClick });
  }

  // tslint:disable-next-line:typedef
 ngOnInit() {
     this.GetData();
 }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  // tslint:disable-next-line:typedef
  GetData(){
     this.vacancyService.getAllVacancy().subscribe(data => {
         this.vacancies = data;
         console.log(data);

       },
       error => {
         this.showToast('danger', true);
       }
     );

  }
}
