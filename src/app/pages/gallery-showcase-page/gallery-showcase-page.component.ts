import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { ICaptionCard } from 'src/app/interfaces/slideshow-image.interface';
import { GalleryProviderService } from 'src/app/services/gallery-provider.service';
import { PaginatorIntlService } from 'src/app/services/paginator-intl.service';

@Component({
    selector: 'app-gallery-showcase-page',
    templateUrl: './gallery-showcase-page.component.html',
    styleUrls: ['./gallery-showcase-page.component.scss'],
    providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }]
})
export class GalleryShowcasePageComponent {
    public title: string;
    public imageUrl: string;
    public images: ICaptionCard[];
    public collectionName: string;

    // the title and imageUrl must be passed via the app-routing.module file as
    // 'data' elements
    constructor(
        private route: ActivatedRoute,
        private galleryProvider: GalleryProviderService
    ) {
        // parsing route data
        const title = this.route.snapshot.data['title'];
        const imageUrl = this.route.snapshot.data['imageUrl'];
        const collectionName = this.route.snapshot.data['collection'];

        this.title = title == null ? 'Gallery Showcase Page' : title;
        this.imageUrl = imageUrl == null ? '' : imageUrl;
        this.collectionName = collectionName == null ? '' : collectionName;

        // retrieving slideshow images
        this.images = this.getImages(this.collectionName);
    }

    public getImages(collection: string): ICaptionCard[] {
        return this.galleryProvider.getCollectionImages(collection);
    }
}
