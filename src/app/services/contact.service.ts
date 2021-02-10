import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Contact} from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/con/contact';

  constructor(private http: HttpClient) { }

  getContact(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllContact(): Observable<any> {
    return this.http.get(`${this.baseUrl}\\all`);
  }
  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.baseUrl}`, contact);
  }

  updateContact(id: number, value: any): Observable<Contact> {
    return this.http.put<Contact>(`${this.baseUrl}/${id}`, value);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getContactList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
