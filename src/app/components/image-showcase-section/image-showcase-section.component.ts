import { Component } from '@angular/core';
import { GalleryProviderService } from 'src/app/services/gallery-provider.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-image-showcase-section',
    templateUrl: './image-showcase-section.component.html',
    styleUrls: ['./image-showcase-section.component.scss']
})
export class ImageShowcaseSectionComponent {
    public images: string[];
    public length = 50;
    public pageSize = 20;
    public pageIndex = 0;
    public pageEvent!: PageEvent;

    constructor(private galleryProvider: GalleryProviderService) {
        this.images = galleryProvider.getCollectionImages('season1');
    }

    handlePageEvent(e: PageEvent) {
        this.pageEvent = e;
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
    }
}
