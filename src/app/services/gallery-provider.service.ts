import { Injectable } from '@angular/core';
import { ICaptionCard } from '../interfaces/slideshow-image.interface';

@Injectable({
    providedIn: 'root'
})
export class GalleryProviderService {
    private _images: ICaptionCard[];

    constructor() {}

    public getCollectionImages(
        collectionName: string,
        startIndex: number,
        numItems: number
    ): ICaptionCard[] {
        return this._images.slice(startIndex, startIndex + numItems);
    }

    public countCollectionImages(collection: string): number {
        return this._images.length;
    }
}
