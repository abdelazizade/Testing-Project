import { HttpClient } from '@angular/common/http';
import { computed, Inject, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { delay, finalize, Observable, tap } from 'rxjs';
import { IapiService, Ipost } from '../../models/interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class FetchDataClass implements IapiService{
  private http = inject(HttpClient);
  loading = signal(false);
  isLoading = computed(() => !this.loading());

  constructor(@Inject('API_URL') private url: string){}

  getData(category: string = 'posts'): any {
    this.loading.set(true);
    console.log(this.loading());
    
    return this.http.get(this.url + category).pipe(
      tap(() =>  console.log('Loading')),
      delay(2000),
      finalize(() => {this.loading.set(false); console.log(this.loading());
      })
    );
  }

  getDataById(category: string = 'posts/', id: unknown = '1') : Observable<Ipost> {
    return this.http.get<Ipost>(this.url + category + id);
  }
}
