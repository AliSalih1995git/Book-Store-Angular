import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const localToken: string | null = localStorage.getItem('userToken');
    // if (localToken !== null) {
    //   const newRequest = request.clone({
    //     headers: request.headers.set('Authorization', localToken),
    //   });
    //   return next.handle(newRequest);
    // } else {
    //   return next.handle(request);
    // }
    return next.handle(request);
  }
}
