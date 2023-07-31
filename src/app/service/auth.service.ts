import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private backendUrl = 'http://localhost:5001';

  register(formData: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/auth/register`, formData);
  }

  login(formData: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/auth/login`, formData);
  }
  getProfile(): Observable<any> {
    return this.http.get(`${this.backendUrl}/auth/profile`);
  }

  IsLoggedIn(): boolean {
    return localStorage.getItem('userToken') !== null;
  }
}
