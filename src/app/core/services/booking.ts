import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Booking {
   private baseUrl = 'http://localhost:3000/bookings';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.baseUrl);
  }

  getById(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.baseUrl}/${id}`);
  }

  create(data: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.baseUrl, data);
  }

  update(id: number, status: string): Observable<Booking> {
    return this.http.put<Booking>(`${this.baseUrl}/${id}`, { status });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
