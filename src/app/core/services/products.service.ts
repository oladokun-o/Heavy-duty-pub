import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { apiConfig } from '../apis/config.api';
import { ProductQueries, ProductType } from '../interfaces/products.interface';
import { SanityAPIResponse } from '../interfaces/index.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  private getProductQuery(type: ProductType): string {
    const queries = ProductQueries;
    let product = queries.find(q => q.name === type);
    return product ? product.query : '';
  }

  getProducts(product: ProductType): Observable<any[]> {
    const query = this.getProductQuery(product);
    if (query) {
      return this.http.get<SanityAPIResponse>(apiConfig.products.query(query)).pipe(
        switchMap(res => {
          return res.result.length > 0 ? of(res.result) : of([]);
        }),
        catchError(err => {
          return throwError(err);
        })
      );
    } else {
      return of([]);
    }
  }

  getProductById(productType: ProductType, _id: number): Observable<any> {
    const query = this.getProductQuery(productType);

    // Check if query is found
    if (!query) {
      return of(null);
    }

    // Modify the query to include the ID filter
    const idQuery = query.replace(/\]\s*\{/, ` && _id == '${_id}'] {`);

    // Encode the query to handle special characters
    const encodedQuery = encodeURIComponent(idQuery);

    return this.http.get<SanityAPIResponse>(apiConfig.products.query(encodedQuery)).pipe(
      switchMap(res => {
        return res.result.length > 0 ? of(res.result[0]) : of(null);
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

}
