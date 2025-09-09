import { Component, inject, input, OnInit } from '@angular/core';
import { FetchDataClass } from '../../services/fetch-data/fetch-data';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Ipost } from '../../models/interfaces/interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  imports: [CommonModule],
  templateUrl: './post-details.html',
  styleUrl: './post-details.scss',
})
export class PostDetails {
  activatedRoute = inject(ActivatedRoute);
  post$: Observable<any> = this.activatedRoute?.data;

  // ngOnInit() {
  //   console.log(this.activatedRoute?.data.subscribe((data: any)=> console.log(data?.product)
  //   ));
  // }
}
