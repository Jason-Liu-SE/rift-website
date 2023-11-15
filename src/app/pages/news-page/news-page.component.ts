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
    public paginationLength!: number;
    public pageSize: number = 10;
    public pageIndex: number = 0;
    public pageEvent!: PageEvent;

    public newsItems: INewsItem[] = [];

    constructor(private newsItemProvider: NewsItemProviderService) {
        this.newsItemProvider
            .countNewsItems()
            .subscribe(
                (data: { count: number }) =>
                    (this.paginationLength = data.count)
            );

        // setting the initial page items
        this.populateNewsItems();
    }

    public handlePageEvent(e: PageEvent) {
        this.pageEvent = e;
        this.paginationLength = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;

        // updating the displayed news items
        this.populateNewsItems();

        window.scrollTo(0, 0);
    }

    private populateNewsItems() {
        this.newsItemProvider
            .getNewsItems(this.pageIndex * this.pageSize, this.pageSize)
            .subscribe((data: INewsItem[]) => {
                this.newsItems = data;
                console.log(data);
            });
    }
}
