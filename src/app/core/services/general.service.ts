import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { apiConfig } from '../apis/config.api';
import { catchError, switchMap } from 'rxjs/operators';
import { aboutUsQuery, servicesQuery } from '../interfaces/products.interface';
import { AboutUsData, SanityAPIResponse, ServicesData } from '../interfaces/index.interface';

interface NewMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(payload: NewMessage): Observable<any> {
    return this.http.post<any>(apiConfig.contact.support(), payload).pipe(
      switchMap((res: any) => {
        return res ? of(res) : throwError("Error sending message");
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  getAboutUs(): Observable<AboutUsData | null> {
    const query = aboutUsQuery;

    if (query) {
      return this.http.get<SanityAPIResponse>(apiConfig.content.aboutUs(query)).pipe(
        switchMap((res: any) => {
          // Check if the result array has data, otherwise return null
          return res.result ? of(res.result) : of(null);
        }),
        catchError((err) => {
          // Handle errors properly by throwing them
          return throwError(err);
        })
      );
    } else {
      // If no query, return null
      return of(null);
    }
  }

  getServices(): Observable<ServicesData | null> {
    const query = servicesQuery;

    return this.http.get<SanityAPIResponse>(apiConfig.content.services(query)).pipe(
      switchMap((res: any) => {
        // Check if the result has data, otherwise return null
        return res.result ? of(res.result) : of(null);
      }),
      catchError((err) => {
        // Handle errors properly by throwing them
        return throwError(err);
      })
    );
  }
}
