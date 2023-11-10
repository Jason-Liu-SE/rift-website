import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { INewsItem } from 'src/app/interfaces/news-item.interface';
import { NewsItemProviderService } from 'src/app/services/news-item-provider.service';
import { PaginatorIntlService } from 'src/app/services/paginator-intl.service';

@Component({
    selector: 'app-page-news',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss'],
    providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }]
})
export class NewsPageComponent {
    public length!: number;
    public pageSize: number = 10;
    public pageIndex: number = 0;
    public pageEvent!: PageEvent;

    public newsItems: INewsItem[];

    constructor(private newsItemProvider: NewsItemProviderService) {
        this.length = newsItemProvider.countNewsItems();

        // setting the initial page items
        this.newsItems = newsItemProvider.getNewsItems(
            this.pageIndex * this.pageSize,
            this.pageSize
        );
    }

    public handlePageEvent(e: PageEvent) {
        this.pageEvent = e;
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;

        // updating the displayed news items
        this.newsItems = this.newsItemProvider.getNewsItems(
            this.pageIndex * this.pageSize,
            this.pageSize
        );

        window.scrollTo(0, 0);
    }
}
