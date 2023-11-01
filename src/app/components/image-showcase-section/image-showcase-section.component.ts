import { Component } from '@angular/core';
import { GalleryProviderService } from 'src/app/services/gallery-provider.service';

@Component({
    selector: 'app-image-showcase-section',
    templateUrl: './image-showcase-section.component.html',
    styleUrls: ['./image-showcase-section.component.scss']
})
export class ImageShowcaseSectionComponent {
    public images: string[];

    constructor(private galleryProvider: GalleryProviderService) {
        this.images = galleryProvider.getCollectionImages('season1');
    }
}
