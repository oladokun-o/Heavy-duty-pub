// user-details.resolver.ts

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<any> {

  constructor(private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // Call the method in AuthService to fetch user details
    return this.authService.getUser().pipe(
      catchError(error => {
        // Handle errors (e.g., log them or redirect to an error page)
        console.error('Error fetching user details:', error);
        // Return an empty object or throw an error
        return of({});
      })
    );
  }
}
