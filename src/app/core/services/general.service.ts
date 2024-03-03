import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { apiConfig } from '../apis/config.api';
import { catchError, switchMap } from 'rxjs/operators';

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
}
