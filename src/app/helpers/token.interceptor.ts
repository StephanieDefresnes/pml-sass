import { AuthenticationService } from '../services/authentication.service';
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
  constructor(
    public authService: AuthenticationService,
  ) {}
  
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
  
    if (this.authService.isLoggedIn()) {
        
      let newRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}