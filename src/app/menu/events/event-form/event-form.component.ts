import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Vendor} from '../../../model/vendor';
import {VendorServiceService} from '../../../services/vendor-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Event} from '../../../model/event';
import {EventService} from '../../../services/event.service';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  loading: any;
  uid: string;
  // @ts-ignore
  event: Event = new Event();
  books: Array<Vendor>;
  checks: any;
  booksRecieved: Array<Vendor>;
  action: string;
  selectedBook: Vendor;
  addedBook: Array<Vendor>;
  @Input()
  book: Vendor;

  @Output()
  bookAddedEvent = new EventEmitter();
  private selectedFile;
  imgURL: any;

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  constructor(private fb: FormBuilder,
              private toastrService: NbToastrService,
              private httpClientService: VendorServiceService,
              private activedRoute: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private eventService: EventService,
              private route: ActivatedRoute) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.refreshData();
    this.toggleLoadingAnimation();
    this.check();

    this.firstForm = this.fb.group({
      ename: ['', Validators.required],
      edesc: ['', Validators.required],
      eplace: ['', Validators.required],

    });

    this.secondForm = this.fb.group({
      // ename: [''],
    });

    this.thirdForm = this.fb.group({
      // thirdCtrl: ['', Validators.required],
    });
  }

  // tslint:disable-next-line:typedef
  addService() {
    this.event.eServices = JSON.stringify(this.addedBook.map(i => ({id: i.id, name: i.name})));
    console.log((this.event));
  }

  // test(){
  //   console.log(this.event);
  // }

  // tslint:disable-next-line:typedef
  toggle(checked: boolean, book: Vendor) {
    if (checked) {
      this.addedBook.push(book);
    } else {
      this.addedBook = this.addedBook.filter(i => i !== book);
    }
    console.log(this.addedBook);
  }

// tslint:disable-next-line:typedef
  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

  // tslint:disable-next-line:typedef
  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  // tslint:disable-next-line:typedef
  saveBook() {
    if
    (this.book.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/springboot-crud-rest/vendor/upload', uploadData, {observe: 'response'})
        .subscribe((response) => {
            if (response.status === 200) {
              this.httpClientService.addBook(this.book).subscribe(
                (book) => {
                  this.bookAddedEvent.emit();
                  this.router.navigate(['admin', 'books']);
                }
              );
              console.log('Image uploaded successfully');
            } else {
              console.log('Image not uploaded successfully');
            }
          }
        );
    } else {
      this.httpClientService.updateBook(this.book).subscribe(
        (book) => {
          this.bookAddedEvent.emit();
          this.router.navigate(['admin', 'books']);
        }
      );
    }
  }

  // tslint:disable-next-line:typedef
  refreshData() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        // get the url parameter named action. this can either be add or view.
        this.action = params.action;
        // get the parameter id. this will be the id of the book whose details
        // are to be displayed when action is view.
        const id = params.id;
        // if id exists, convert it to integer and then retrive the book from
        // the books array
        if (id) {
          this.selectedBook = this.books.find(book => {
            return book.id === +id;
          });
        }
      }
    );
  }

// we will be taking the books response returned from the database
// and we will be adding the retrieved

  // tslint:disable-next-line:typedef
  handleSuccessfulResponse(response) {
    this.books = new Array<Vendor>();
    this.addedBook = new Array<Vendor>();
    // get books returned by the api call
    this.booksRecieved = response;
    for (const book of this.booksRecieved) {

      const checks = JSON.parse(window.sessionStorage.getItem('CARTID') ? window.sessionStorage.getItem('CARTID') : '[]');
      const bookwithRetrievedImageField = new Vendor();
      bookwithRetrievedImageField.id = book.id;
      bookwithRetrievedImageField.name = book.name;
      // populate retrieved image field so that book image can be displayed
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + book.picByte;
      bookwithRetrievedImageField.author = book.author;
      bookwithRetrievedImageField.price = book.price;
      bookwithRetrievedImageField.picByte = book.picByte;
      let temp = false;
      checks.forEach(i => {
        if (i === book.id) {
          temp = true;
        }
      });
      bookwithRetrievedImageField.checked = temp;
      this.books.push(bookwithRetrievedImageField);
      if (temp) {
        this.addedBook.push(bookwithRetrievedImageField);
      }
    }
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
  showToast(status: NbComponentStatus, destroyByClick) {
    // @ts-ignore
    this.toastrService.show(status, `Notification`, {status}, {destroyByClick});
  }


  // tslint:disable-next-line:typedef
  OnPublish() {
    this.event.eStatus = 'Published';
    this.event.eDate = this.formatDate(this.event.eDate);
    console.log(this.event);
    this.eventService.createEvent(this.event).subscribe(data => {
        console.log(data);
        this.event = new Event();
        this.showToast('success', true);
        this.router.navigate(['menu/event']);

      },
      error => {
        this.showToast('danger', true);

      }
    );
  }


  // tslint:disable-next-line:typedef
  Ondraft() {
    this.event.eStatus = 'Draft';
    this.event.eDate = this.formatDate(this.event.eDate);
    // @ts-ignore
    this.eventService.createEvent(this.event).subscribe(data => {
        console.log(data);
        this.event = new Event();
        this.showToast('success', true);
        this.router.navigate(['menu/event']);

      },
      error => {
        this.showToast('danger', true);

      }
    );
  }


  // tslint:disable-next-line:typedef
  check() {
    this.uid = this.route.snapshot.paramMap.get('uid');

    if (this.uid != null) {
      this.GetEvent(this.uid);
    }
  }

  // tslint:disable-next-line:typedef
  GetEvent(id) {
    this.eventService.getEvent(id).subscribe(data => {
        console.log(data);
        this.showToast('success', true);
        this.event = data;
      },
      error => {
        this.showToast('danger', true);

      }
    );
  }

  // tslint:disable-next-line:typedef
  Update(id, event) {
    event.eStatus = 'Published';
    this.eventService.updateEvent(id, event).subscribe(data => {
        console.log(data);
        this.showToast('success', true);
        this.event = new Event();
        this.router.navigate(['menu/event']);

      },
      error => {
        this.showToast('danger', true);

      }
    );
  }

  UpdateDraft(id: number, event: Event) {
    event.eStatus = 'Draft';
    this.eventService.updateEvent(id, event).subscribe(data => {
        console.log(data);
        this.showToast('success', true);
        this.event = new Event();
        this.router.navigate(['menu/event']);

      },
      error => {
        this.showToast('danger', true);

      }
    );
  }
}
