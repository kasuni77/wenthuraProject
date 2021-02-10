import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/emp/employee';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllEmployee(): Observable<any> {
    return this.http.get(`${this.baseUrl}\\all`);
  }

  getPlanners(): Observable<any> {
    return this.http.get(`${this.baseUrl}\\plan`);
  }
  getNewEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}\\new`);
  }
  getOldEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}\\old`);
  }


  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}`, event);
  }

  updateEvent(id: number, value: any): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/${id}`, value);
  }

  updateStatus(id: number, value: any): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}\\status/${id}`, value);
  }

  deleteStatus(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  geStatusList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
