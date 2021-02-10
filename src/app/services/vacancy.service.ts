import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vacancy} from '../model/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/vac/vacancy';

  constructor(private http: HttpClient) { }

  getVacancy(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllVacancy(): Observable<any> {
    return this.http.get(`${this.baseUrl}\\all`);
  }

  createVacancy(vacancy: Vacancy): Observable<Vacancy> {
    return this.http.post<Vacancy>(`${this.baseUrl}`, vacancy);
  }

  updateVacancy(id: number, value: any): Observable<Vacancy> {
    return this.http.put<Vacancy>(`${this.baseUrl}/${id}`, value);
  }

  deleteVacancy(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getVehicleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
