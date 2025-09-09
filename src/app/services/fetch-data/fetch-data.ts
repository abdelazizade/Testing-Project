import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IapiService, Ipost } from '../../models/interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class FetchDataClass implements IapiService{
  private http = inject(HttpClient);
  constructor(@Inject('API_URL') private url: string){}

  getData(category: string = 'posts'): any {
    return this.http.get(this.url + category);
  }

  getDataById(category: string = 'posts/', id: unknown = '1') : Observable<Ipost> {
    return this.http.get<Ipost>(this.url + category + id);
  }
}
