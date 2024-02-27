import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { apiConfig } from '../apis/config.api';
import { catchError, switchMap } from 'rxjs/operators';
import { LoggedInUser } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(payload: { email: string, password: string }): Observable<LoggedInUser> {
    return this.http.post<LoggedInUser>(apiConfig.auth.login(), payload).pipe(
      switchMap((res) => {
        return res && res.status === 200 ? of(res) : throwError("Error logging in");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
