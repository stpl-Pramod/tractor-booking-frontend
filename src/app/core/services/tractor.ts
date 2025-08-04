import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tractor {
   private baseUrl = 'http://localhost:3000/tractors';
  availabilityStatus: string | undefined;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tractor[]> {
    return this.http.get<Tractor[]>(this.baseUrl);
  }

  getById(id: number): Observable<Tractor> {
    return this.http.get<Tractor>(`${this.baseUrl}/${id}`);
  }

  create(data: Tractor): Observable<Tractor> {
    return this.http.post<Tractor>(this.baseUrl, data);
  }

  update(id: number, data: Tractor): Observable<Tractor> {
    return this.http.put<Tractor>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
