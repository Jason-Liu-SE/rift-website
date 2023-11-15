import { Component, Input, OnInit } from '@angular/core';
import { INewsItem } from 'src/app/interfaces/news-item.interface';

@Component({
    selector: 'app-news-display',
    templateUrl: './news-display.component.html',
    styleUrls: ['./news-display.component.scss']
})
export class NewsDisplayComponent implements OnInit {
    @Input({ required: true }) public newsItems!: INewsItem[];

    public date!: Date;
    public test = '';

    ngOnInit() {
        // parsing newsItem dates into the correct format
        this.newsItems.map((item: INewsItem) => {
            item.date = new Date(item.date).toDateString();
        });
    }
}
