import { Component, inject } from '@angular/core';
import { FetchDataClass } from '../../services/fetch-data/fetch-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, RouterLink],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts {
  fetchData = inject(FetchDataClass);
  posts$ = this.fetchData.getData();
  // posts: any[] = [];
  // ngOnInit() {}
}
