// auth.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

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
    }  else {
      console.log("No auth token");
      // If there is no token, redirect to the login page
      this.router.navigate(['/login']);
      return of();
    }

    // Pass the cloned request to the next handler
    return next.handle(request);
  }
}

@Injectable()
export class TokenValidationInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the authentication token from the service
    this.authService.isAuthenticated().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

    return of();
  }
}
