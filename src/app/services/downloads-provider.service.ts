import { Injectable } from '@angular/core';
import { IDownloadCollection } from '../interfaces/download-collection.interface';

@Injectable({
    providedIn: 'root'
})
export class DownloadsProviderService {
    private downloadCollections: IDownloadCollection[];

    constructor() {}

    public getDownloadCollections(): IDownloadCollection[] {
        return this.downloadCollections;
    }
}
