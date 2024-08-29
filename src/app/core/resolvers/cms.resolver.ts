import type { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneralService } from '../services/general.service';


/**
 * Resolver to fetch services data
 */
@Injectable({
  providedIn: 'root'
})
export class ServicesResolver implements Resolve<any> {

  constructor(
    private generalService: GeneralService
  ) { }

  resolve(): Observable<any> {
    return this.generalService.getServices().pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}

/**
 * Resolver to fetch about us data
 */
@Injectable({
  providedIn: 'root'
})
export class AboutUsResolver implements Resolve<any> {

  constructor(
    private generalService: GeneralService
  ) { }

  resolve(): Observable<any> {
    return this.generalService.getAboutUs().pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
