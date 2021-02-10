import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Event} from '../../../model/event';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';
import {EventService} from '../../../services/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../../../model/employee';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-adm-event-view',
  templateUrl: './adm-event-view.component.html',
  styleUrls: ['./adm-event-view.component.scss']
})
export class AdmEventViewComponent implements OnInit{
  loading: any;
  newevents: Observable<Event[]>;
  employees: Observable<Employee[]>;
  events: Observable<Event[]>;

  constructor(private eventService: EventService,
              private toastrService: NbToastrService,
              private empService:EmployeeService) { }

  // tslint:disable-next-line:typedef
 ngOnInit() {
    this.GetAllNew();
    this.GetOld();
    this.toggleLoadingAnimation();
    this.getEventPlanners();
 }
  // tslint:disable-next-line:typedef
  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

  // tslint:disable-next-line:typedef
  showToast(status: NbComponentStatus, destroyByClick) {
    // @ts-ignore
    this.toastrService.show(status, `Notification`, { status }, { destroyByClick });
  }

  // tslint:disable-next-line:typedef
 GetAllNew(){
    this.eventService.getNewEvents().subscribe(data => {
        this.newevents = data;
        console.log(data);

      },
        error => {
          this.showToast('danger', true);
        }
    );
 }

  // tslint:disable-next-line:typedef
  GetOld(){
    this.eventService.getOldEvents().subscribe(data => {
        this.events = data;
        console.log(data);

      },
      error => {
        this.showToast('danger', true);
      }
    );
  }
  // tslint:disable-next-line:typedef
  onDelete(aid) {

    this.eventService.deleteStatus(aid).subscribe(data => {
        this.events = data;
        console.log(data);
        this.events = new Observable<Event[]>();
        this.showToast('success', true);
        location.reload();

      },
      error => {
        this.showToast('danger', true);

      }
    );
  }

  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef
 openAssignForm(aid: number, event) {
    event.eStatus = 'In Progress';
    this.eventService.updateStatus(aid, event).subscribe(data => {
        console.log(data);
        this.showToast('success', true);
        location.reload();

      },
      error => {
        this.showToast('danger', true);

      }
    );
  }


  // tslint:disable-next-line:typedef

  openViewForm(id: any) {

  }


// tslint:disable-next-line:typedef
getEventPlanners(){
  this.empService.getPlanners().subscribe(data => {
      this.employees = data;
      console.log(data);

    },
    error => {
      this.showToast('danger', true);
    }
  );
}

  // tslint:disable-next-line:typedef
  makeComplete(id: any, event) {
    event.eStatus = 'Completed';
    this.eventService.updateStatus(id, event).subscribe(data => {
        console.log(data);
        this.showToast('success', true);
        location.reload();

      },
      error => {
        this.showToast('danger', true);

      }
    );
  }

  // tslint:disable-next-line:typedef
  ViewFeedbacks(id: any) {

  }
}


