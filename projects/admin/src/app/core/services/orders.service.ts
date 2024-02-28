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
export class OrdersService {
  get user(): User | null {
    return JSON.parse(sessionStorage.getItem('admin') as string);
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

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

  deleteOrder(id: number): Observable<OrderResponse> {
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
