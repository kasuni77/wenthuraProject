import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/contact';
import {VacancyService} from '../../services/vacancy.service';
import {ContactService} from '../../services/contact.service';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent implements OnInit{
  loading = false;
  contact: Contact = new Contact();
  selectedOption: boolean;

  constructor(private contactService: ContactService,
              private toastrService: NbToastrService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.toggleLoadingAnimation();
  }

  // tslint:disable-next-line:typedef
  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

  confirm1(event): void {

    if (window.confirm('Are you sure that you want to perform this action?')) {
      this.getHelp();

    } else {

      event.confirm.reject();

    }

  }

  // tslint:disable-next-line:typedef
  getHelp() {
    console.log(this.contact);
    this.contactService.createContact(this.contact).subscribe(data => {
        this.showToast('success', true);
        console.log(data);
        this.contact = new Contact();
        location.reload();


      },
      error => {
        this.showToast('danger', true);
      }
    );
  }


  // tslint:disable-next-line:typedef
  showToast(status: NbComponentStatus, destroyByClick) {
    // @ts-ignore
    this.toastrService.show(status, `Notification`, { status }, { destroyByClick });
  }
}
