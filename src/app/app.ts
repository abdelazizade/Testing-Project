import { Component, effect, Inject, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { interval } from 'rxjs';
import { ArticleCardComponent } from "./shared/article-card/article-card";
import { SpinnerComponent } from "./shared/spinner/spinner";
import { FetchDataClass } from './services/fetch-data/fetch-data';
import { IapiService } from './models/interfaces/interface';
import { Card } from "./card/card";

@Component({
  selector: 'app-root',
  imports: [ Card],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('testing');
    constructor(@Inject('API_SERVICE') public fetchData: IapiService) {
      effect(() => {
   
  });
    }
}
