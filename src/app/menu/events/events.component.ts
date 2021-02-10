import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {Observable} from 'rxjs';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';
import {Event} from '../../model/event';
import {Vacancy} from '../../model/vacancy';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

 cards: Observable<Event[]>;
  // tslint:disable-next-line:typedef
  loading: any;
  firstCard = {
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  constructor(private toastrService: NbToastrService, private eventService: EventService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getALL();
    this.toggleLoadingAnimation();
  }

  // tslint:disable-next-line:typedef
  showToast(status: NbComponentStatus, destroyByClick) {
    // @ts-ignore
    this.toastrService.show(status, `Notification`, { status }, { destroyByClick });
  }


  // tslint:disable-next-line:typedef
  getALL() {
    this.eventService
      .getAllEvents().subscribe(data => {
        this.cards = data;
        // for(let i=0;i<data.length;i++){
        //   this.cards[i].eServices = this.strBuild(JSON.parse(data[i].eServices));
        // }
        console.log(data);

      },
      error => {
        this.showToast('danger', true);
      }
    );
  }

  // strBuild(arr): string{
  //   let str = "ID\tName\n";
  //   for(let i = 0; i < arr.length; i++){
  //     str +=  arr[i].id + "\t" arr[i].eName + "\n";
  //   }
  //   return str;
  // }

  // tslint:disable-next-line:typedef
  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }
  // tslint:disable-next-line:typedef
  Publish(aid: number, event) {
    event.eStatus = 'Published';
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
  onDelete(aid) {

      this.eventService.deleteStatus(aid).subscribe(data => {
        this.cards = data;
        console.log(data);
        this.cards = new Observable<Event[]>();
        this.showToast('success', true);
        location.reload();

      },
      error => {
        this.showToast('danger', true);

      }
    );
  }


  // tslint:disable-next-line:typedef
  onUpdate(uid) {
    this.router.navigate(['menu/event-form', {uid}]);

  }
}
