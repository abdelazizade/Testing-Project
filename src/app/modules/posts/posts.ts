import { Component, Inject, inject } from '@angular/core';
import { FetchDataClass } from '../../services/fetch-data/fetch-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IapiService, Ipost } from '../../models/interfaces/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, RouterLink],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts {
  posts$: Observable<Ipost>;
  
  constructor(@Inject('API_SERVICE') private fetchData: IapiService){
    this.posts$ = this.fetchData.getData();
  }
}
