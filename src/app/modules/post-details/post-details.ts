import { Component, inject, input, OnInit } from '@angular/core';
import { FetchDataClass } from '../../services/fetch-data/fetch-data';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Ipost } from '../../models/interfaces/interface';

@Component({
  selector: 'app-post-details',
  imports: [CommonModule],
  templateUrl: './post-details.html',
  styleUrl: './post-details.scss',
})
export class PostDetails implements OnInit {
  fetchData = inject(FetchDataClass);
  id = input();
  post$ = this.fetchData.getDataById('posts/', this.id());

  ngOnInit() {
    this.post$ = this.fetchData.getDataById('posts/', this.id());
  }
}
