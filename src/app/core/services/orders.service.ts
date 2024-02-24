import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewOrder } from '../interfaces/orders.interface';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiConfig } from '../apis/config.api';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }

  createOrder(order: NewOrder): Observable<any> {
    return this.http.post<any>(apiConfig.orders.create(), order).pipe(
      switchMap((res: any) => {
        return res && res.status === 200 ? of(res) : throwError("Error creating order");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
