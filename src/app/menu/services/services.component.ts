import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vendor} from '../../model/vendor';
import {VendorServiceService} from '../../services/vendor-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  books: Array<Vendor>;
  booksRecieved: Array<Vendor>;
  action: string;
  selectedBook: Vendor;
  loading: any;
  carts: any = [];
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
              private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.refreshData();
    this.toggleLoadingAnimation();
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
    if (this.book.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/springboot-crud-rest/vendor/upload', uploadData, { observe: 'response' })
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
  refreshData()
  {
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
  // tslint:disable-next-line:typedef
  showAddedToast(status: NbComponentStatus, destroyByClick, duration) {
    // @ts-ignore
    this.toastrService.show(status, `Added to profile`, { status }, { destroyByClick }, {duration});
  }

  // tslint:disable-next-line:typedef
  showDeletedToast(status: NbComponentStatus, destroyByClick, duration) {
    // @ts-ignore
    this.toastrService.show(status, `Deleted from profile`, { status }, { destroyByClick }, {duration});
  }


  // tslint:disable-next-line:typedef
  addCart(book) {
    this.carts.push(book.id);
    window.sessionStorage.setItem('CARTID', JSON.stringify(this.carts));
    book.addrm = false;
    if (!book.addrm){
      this.showAddedToast('success', true, '1ms');
    }
  }

  // tslint:disable-next-line:typedef
  removeCart(book){
    this.carts = this.carts.filter(i => i !== book.id);
    window.sessionStorage.setItem('CARTID', JSON.stringify(this.carts));
    book.addrm = true;
    if (book.addrm){
      this.showDeletedToast('danger', true, '1ms');
    }
    }
}

