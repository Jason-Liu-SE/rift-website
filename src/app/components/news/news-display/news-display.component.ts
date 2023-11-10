import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { INewsItem } from 'src/app/interfaces/news-item.interface';

@Component({
    selector: 'app-news-display',
    templateUrl: './news-display.component.html',
    styleUrls: ['./news-display.component.scss']
})
export class NewsDisplayComponent {
    @Input({ required: true }) public newsItems!: INewsItem[];

    public length = 50;
    public pageSize = 20;
    public pageIndex = 0;
    public pageEvent!: PageEvent;

    public handlePageEvent(e: PageEvent) {
        this.pageEvent = e;
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
    }
}
