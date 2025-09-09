import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from '../../models/interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class FetchDataClass {
  private http = inject(HttpClient);

  private readonly url = 'https://jsonplaceholder.typicode.com/';

  getData(category: string = 'posts'): any {
    return this.http.get(this.url + category);
  }
  getDataById(category: string = 'posts/', id: unknown): Observable<Ipost> {
    return this.http.get<Ipost>(this.url + category + id);
  }
}
