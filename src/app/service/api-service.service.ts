import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}
  baseurl: string = 'https://api.itbook.store/1.0/new';

  getAllBooks(): Observable<any> {
    return this.http.get(this.baseurl);
  }
  getSingleProduct(id: any): Observable<any> {
    return this.http.get(`https://api.itbook.store/1.0/books/${id}`);
  }
}
