import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { apiConfig } from '../apis/config.api';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { LoggedInUser, User } from '../interfaces/auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get user(): User | null {
    return JSON.parse(sessionStorage.getItem('admin') as string);
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(payload: { email: string, password: string }): Observable<LoggedInUser> {
    return this.http.post<LoggedInUser>(apiConfig.auth.login(), payload).pipe(
      switchMap((res) => {
        return res && res.status === 200 ? of(res) : throwError("Error logging in");
      }),
      tap(res => {
        sessionStorage.setItem("admin", JSON.stringify(res.user));
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  logout() {
    return this.http.post<any>(apiConfig.auth.logout(), { id: this.user?.id }).pipe(
      tap(() => {
        // Clear the user data from session storage
        sessionStorage.removeItem("admin");
        this.router.navigate(['login']);
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  getToken(): string | null {
    if (!this.user || !this.user.token) {
      this.router.navigate(['login']);
      return null;
    };

    return this.user.token;
  }

  isAuthenticated(): Observable<LoggedInUser> {
    return this.http.get<LoggedInUser>(apiConfig.auth.validateLogin()).pipe(
      switchMap((res) => {
        return res && res.user ? of(res) : throwError("Error logging in");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  getUser(): Observable<User> {
    return this.http.get<User>(apiConfig.auth.getUser(this.user?.id as number)).pipe(
      switchMap((res) => {
        return res ? of(res) : throwError("Error getting user");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
