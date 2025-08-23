import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private baseApiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // booking api called
  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseApiUrl}/bookings`);
  }
}
