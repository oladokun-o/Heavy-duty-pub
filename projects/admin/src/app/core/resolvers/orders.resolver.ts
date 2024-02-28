// user-details.resolver.ts

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrdersService } from 'projects/admin/src/app/core/services/orders.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersResolver implements Resolve<any> {

  constructor(private ordersService: OrdersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // Call the method in AuthService to fetch user details
    return this.ordersService.getOrders().pipe(
      catchError(error => {
        // Handle errors (e.g., log them or redirect to an error page)
        console.error('Error fetching orders:', error);
        // Return an empty object or throw an error
        return of({});
      })
    );
  }
}
