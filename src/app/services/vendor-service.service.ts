import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vendor} from '../model/vendor';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getBooks() {
    return this.httpClient.get<Vendor[]>('http://localhost:8080/springboot-crud-rest/vendor/get');
  }

  addBook(newBook: Vendor) {
    return this.httpClient.post<Vendor>('http://localhost:8080/springboot-crud-rest/vendor/add', newBook);
  }

  deleteBook(id) {
    return this.httpClient.delete<Vendor>('http://localhost:8080/springboot-crud-rest/vendor/' + id);
  }

  updateBook(updatedBook: Vendor) {
    return this.httpClient.put<Vendor>('http://localhost:8080/springboot-crud-rest/vendor/update', updatedBook);
  }

  // updateBook(id: number, value: any): Observable<Vendor> {
  //   return this.httpClient.put<Vendor>(`http://localhost:8080/springboot-crud-rest/vendor/update`+id, value);
  // }
}
