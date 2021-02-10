import {Component, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {NbComponentStatus, NbToastrService, NbWindowService} from '@nebular/theme';
import {EditComponent} from './edit/edit.component';
import {Router} from '@angular/router';
import {Picker, Vacancy} from '../../../model/vacancy';
import {VacancyService} from '../../../services/vacancy.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.scss']
})
export class AddVacancyComponent implements OnInit {
  loading = false;
  @ViewChild('Updateform', { read: TemplateRef }) escCloseTemplate: TemplateRef<HTMLElement>;

  constructor(private toastrService: NbToastrService,
              private windowService: NbWindowService,
              private vacancyService: VacancyService,
              private router: Router) {
  }


  vacancy: Vacancy = new Vacancy();
  picker: Picker = new Picker();
  vacancies: Observable<Vacancy[]>;

  ngOnInit(): void {
    this.getALL();
    this.toggleLoadingAnimation();

  }

  // tslint:disable-next-line:typedef
  deleteConfirm(event) {
    console.log(event);
    this.delete(event);
  }




  // Animation

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


  // CRUD

  // tslint:disable-next-line:typedef
  openWindowForm(event) {
    this.windowService.open(this.escCloseTemplate, {title: 'Update', hasBackdrop: true}, );
    this.vacancy = new Vacancy();
    this.vacancy = event;
    this.picker = new Picker();
    console.log(event);
    console.log(this.vacancy);
  }

  formatDate(date): string {
    let d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.vacancy);
    console.log(this.picker.end);
    this.vacancy.edate = this.formatDate(this.picker.end);
    this.vacancy.sdate = this.formatDate(this.picker.start);
    this.save();
  }


  // tslint:disable-next-line:typedef
  save() {
    console.log(this.vacancy);

    this.vacancyService
      .createVacancy(this.vacancy).subscribe(data => {
        this.showToast('success', true);
        console.log(data);
        this.vacancy = new Vacancy();
        location.reload();


      },
      error => {
        this.showToast('danger', true);
      }
    );
  }

  // tslint:disable-next-line:typedef
  getALL() {

    this.vacancyService
      .getAllVacancy().subscribe(data => {
        this.vacancies = data;
        console.log(data);

      },
      error => {
        this.showToast('danger', true);
      }
    );
  }

  // tslint:disable-next-line:typedef
  delete(event) {
    this.vacancyService
      .deleteVacancy(event).subscribe(data => {
        this.vacancies = data;
        console.log(data);
        this.vacancy = new Vacancy();
        this.showToast('success', true);
        location.reload();

      },
      error => {
        this.showToast('danger', true);

      }
    );
  }

  // tslint:disable-next-line:typedef
  updateVacancy() {
    this.vacancyService.updateVacancy(this.vacancy.id, this.vacancy)
      .subscribe(data => {
        console.log(data);
        this.vacancy = new Vacancy();
        this.showToast('success', true);
      }, error => this.showToast('danger', true));

  }

  // tslint:disable-next-line:typedef
  onClick() {
    this.vacancy.edate = this.formatDate(this.picker.end);
    this.vacancy.sdate = this.formatDate(this.picker.start);
    this.updateVacancy();
  }
}
