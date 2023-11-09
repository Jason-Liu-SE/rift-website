import { Component, Input } from '@angular/core';
import { INewsItem } from 'src/app/interfaces/news-item';

@Component({
    selector: 'app-news-display',
    templateUrl: './news-display.component.html',
    styleUrls: ['./news-display.component.scss']
})
export class NewsDisplayComponent {
    @Input({ required: true }) public newsItems!: INewsItem[];
}
