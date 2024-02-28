// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((user) => {
        if (user) {
          // User is authenticated, allow access to the route
          this.router.navigate(['/dashboard']);
          return true;
        } else {
          // User is not authenticated, redirect to login page
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError(() => {
        // Error occurred while checking authentication status, redirect to login page
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
