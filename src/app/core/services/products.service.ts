import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

type ProductType = "asphalts" | "equipments" | "haulages" | "porta-cabins";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProductsFromJson(product: ProductType): Observable<any[]> {
    return this.http.get<any[]>(`assets/mocks/${product}.products.json`).pipe(
      switchMap(res => {
        return res && res.length > 0 ? of(res) : of([]);
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  getProductById(productType: ProductType, id: number): Observable<any> {
    return this.getProductsFromJson(productType).pipe(
      map(products => products.find(product => product.id.toString() === id.toString()))
    );
  }  

}
