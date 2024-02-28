// auth.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the authentication token from the service
    const authToken = this.authService.getToken() || null;

    // Clone the request and add the token to the header if it exists
    if (authToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `${authToken}`
        }
      });
    }

    // Pass the cloned request to the next handler
    return next.handle(request);
  }
}
