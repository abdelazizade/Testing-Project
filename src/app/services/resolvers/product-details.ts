import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';
import { FetchDataClass } from '../fetch-data/fetch-data';
import { Observable } from 'rxjs';
import { Ipost } from '../../models/interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsResolver implements Resolve<Ipost> {
  constructor(private fetchDate: FetchDataClass) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Ipost> {
    return this.fetchDate.getDataById('posts', route.paramMap.get('id'));
  }
}
