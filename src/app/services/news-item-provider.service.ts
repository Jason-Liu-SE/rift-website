import { Injectable } from '@angular/core';
import { INewsItem } from '../interfaces/news-item.interface';

@Injectable({
    providedIn: 'root'
})
export class NewsItemProviderService {
    private newsItems: INewsItem[];

    constructor() {}

    public getNewsItems(startIndex: number, numItems: number): INewsItem[] {
        return this.newsItems.slice(startIndex, startIndex + numItems);
    }

    public countNewsItems(): number {
        return this.newsItems.length;
    }
}
