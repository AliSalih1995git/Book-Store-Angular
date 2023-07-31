import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}
  baseurl: string = 'https://api.itbook.store/1.0';

  getAllBooks(): Observable<any> {
    return this.http.get(`${this.baseurl}/new`);
  }
  getSingleProduct(id: any): Observable<any> {
    return this.http.get(`${this.baseurl}/books/${id}`);
  }
}
