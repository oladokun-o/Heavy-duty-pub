import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { apiConfig } from '../apis/config.api';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { LoggedInUser, User } from '../interfaces/auth.interface';
import { Router } from '@angular/router';
import { Order, OrderResponse, OrderStatus } from '../interfaces/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get user(): User | null {
    return JSON.parse(sessionStorage.getItem('admin') as string);
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

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

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(apiConfig.user.getUsers()).pipe(
      switchMap((res) => {
        return res && res.length > 0 ? of(res) : throwError("Error getting users");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  createUser(payload: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(apiConfig.user.createUser(), payload).pipe(
      switchMap((res) => {
        return res ? of(res) : throwError("Error creating user");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  updateteUser(id: number, payload: { email: string, password: string }): Observable<any> {
    return this.http.put<any>(apiConfig.user.updateUser(id), payload).pipe(
      switchMap((res) => {
        return res ? of(res) : throwError("Error updating user");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(apiConfig.user.deleteUser(id)).pipe(
      switchMap((res) => {
        return res ? of(res) : throwError("Error deleting user");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
