import { Component } from "@angular/core";
import { TitlePipe } from "../pipes/title.pipes";

@Component({
    selector: 'app-article-card',
    templateUrl: 'article.html',
    styleUrl: 'article.scss',
    imports: [TitlePipe],

})
export class ArticleCardComponent {
    
}