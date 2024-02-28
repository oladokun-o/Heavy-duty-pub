// user-details.resolver.ts

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<any> {

  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // Call the method in AuthService to fetch user details
    return this.userService.getUser().pipe(
      catchError(error => {
        // Handle errors (e.g., log them or redirect to an error page)
        console.error('Error fetching user details:', error);
        // Return an empty object or throw an error
        return of({});
      })
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<any> {

  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // Call the method in AuthService to fetch user details
    return this.userService.getUsers().pipe(
      catchError(error => {
        // Handle errors (e.g., log them or redirect to an error page)
        console.error('Error fetching users:', error);
        // Return an empty object or throw an error
        return of({});
      })
    );
  }
}
