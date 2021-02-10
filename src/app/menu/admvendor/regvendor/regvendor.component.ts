import {Component, OnInit, Input, EventEmitter, Output, ViewChild, TemplateRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

import { VendorServiceService } from '../../../services/vendor-service.service';
import {NzMessageService, NzUploadFile} from 'ng-zorro-antd';
import {Observable, Observer} from 'rxjs';
import {NbWindowRef, NbWindowService} from '@nebular/theme';
import {Vendor} from '../../../model/vendor';
@Component({
  selector: 'app-regvendor',
  templateUrl: './regvendor.component.html',
  styleUrls: ['./regvendor.component.scss']
})
export class RegvendorComponent implements OnInit {
  loading = false;
  avatarUrl?: string;
  vendor: Vendor = new Vendor();
  ven: Vendor = new Vendor();
  books: Array<Vendor>;
  booksRecieved: Array<Vendor>;
  action: string;
  aid: number;
  selectedBook: Vendor;
  @ViewChild('Updateform', {read: TemplateRef}) escCloseTemplate: TemplateRef<HTMLElement>;
  @Input()
  book: Vendor;

  @Output()
  bookAddedEvent = new EventEmitter();
  private selectedFile;
  imgURL: any;

  constructor(private httpClientService: VendorServiceService,
              private activedRoute: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private msg: NzMessageService,
              private windowService: NbWindowService) {
  }

  ngOnInit(): void {
    this.refreshData();
    this.toggleLoadingAnimation();
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveBook() {
    if (this.vendor.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/springboot-crud-rest/vendor/upload', uploadData, {observe: 'response'})
        .subscribe((response) => {
            if (response.status === 200) {
              this.httpClientService.addBook(this.vendor).subscribe(
                res => {
                  this.vendor = new Vendor();
                  location.reload();
                }
              );
              console.log('Image uploaded successfully');
            } else {
              console.log('Image not uploaded successfully');
            }
          }
        );
    } else {
      this.httpClientService.updateBook(this.vendor).subscribe(
        (book) => {
          location.reload();
          console.log('uploaded successfully');
        }
      );
    }
  }

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
  handleSuccessfulResponse(response) {
    this.books = new Array<Vendor>();
    // get books returned by the api call
    this.booksRecieved = response;
    for (const book of this.booksRecieved) {

      const bookwithRetrievedImageField = new Vendor();
      bookwithRetrievedImageField.id = book.id;
      bookwithRetrievedImageField.name = book.name;
      // populate retrieved image field so that book image can be displayed
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + book.picByte;
      bookwithRetrievedImageField.author = book.author;
      bookwithRetrievedImageField.price = book.price;
      bookwithRetrievedImageField.picByte = book.picByte;
      this.books.push(bookwithRetrievedImageField);
    }
  }

  deleteBook(event) {
    this.aid = event;
    this.httpClientService.deleteBook(this.aid).subscribe(
      res => {
        location.reload();
      },
      error => {
        alert('An error occured during process!');
      }
    );
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }
  // addBook() {
  //   this.selectedBook = new Vendor();
  //   this.router.navigate(['menu', 'adm-vendor'], { queryParams: { action: 'add' } });
  // }
  //
  // viewBook(id: number) {
  //   this.router.navigate(['menu/adm-vendor/reg-ven','view-book'], { queryParams: { id, action: 'view' } });
  //   console.log(id);
  // }
  openWindowForm(event) {
    this.windowService.open(this.escCloseTemplate, {title: 'Update', hasBackdrop: true}, );
    this.ven = new Vendor();
    this.ven = event;
    console.log('Fuck');
    console.log(event);
    console.log(this.ven);
  }

  editBook(event) {
    this.ven = new Vendor();
    this.ven = event;
    console.log('Here Am I');
    console.log(this.ven);
    if (this.ven.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/springboot-crud-rest/vendor/upload', uploadData, {observe: 'response'})
        .subscribe((response) => {
            if (response.status === 200) {
              this.httpClientService.addBook(this.ven).subscribe(
                res => {
                  this.ven = new Vendor();
                  location.reload();
                }
              );
              console.log('Image uploaded successfully');
            } else {
              console.log('Image not uploaded successfully');
            }
          }
        );
    } else {
      this.httpClientService.updateBook(this.ven).subscribe(
        (book) => {
          location.reload();
          console.log('uploaded successfully');
        }
      );
    }
  }
}

