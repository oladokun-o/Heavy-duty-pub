import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class AuthService {
  get user(): User | null {
    return JSON.parse(sessionStorage.getItem('admin') as string);
  }

  token: string = (JSON.parse(sessionStorage.getItem('admin') as string) as User)?.token || '';

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
      // this.router.navigate(['login']);
      return null;
    };

    return this.user.token;
  }

  isAuthenticated(): Observable<LoggedInUser> {
    const headers = new HttpHeaders();

    // Check if user is logged in and has a token
    if (this.token) {
      // Set the Authorization header
      headers.set('Authorization', this.token);
    }

    console.log(headers);

    return this.http.get<LoggedInUser>(apiConfig.auth.validateLogin(), { headers }).pipe(
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

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(apiConfig.orders.getOrders()).pipe(
      switchMap((res) => {
        return res && res.length > 0 ? of(res) : throwError("Error getting orders");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  deleteOrders(id: number): Observable<OrderResponse> {
    return this.http.delete<OrderResponse>(apiConfig.orders.deleteOrder(id)).pipe(
      switchMap((res) => {
        return res ? of(res) : throwError("Error deleting order");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  updateOrderStatus(id: number, status: OrderStatus): Observable<LoggedInUser> {
    return this.http.put<LoggedInUser>(apiConfig.orders.updateOrderStatus(id), { status: status }).pipe(
      switchMap((res) => {
        return res ? of(res) : throwError("Error updating order status");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
