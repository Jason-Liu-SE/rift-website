import { Component } from '@angular/core';
import { ICardSelection } from 'src/app/interfaces/card-selection.interface';
import { GalleryProviderService } from 'src/app/services/gallery-provider.service';

@Component({
    selector: 'app-page-gallery',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {
    constructor(private galleryProvider: GalleryProviderService) {}

    public galleryCollections: ICardSelection[] = [
        {
            imageUrl: '../../../assets/home/1.png',
            routerLink: '/gallery/season-1',
            title: 'Season 1',
            desc: `${this.galleryProvider.countCollectionImages(
                'season-1'
            )} photos`
        },
        {
            imageUrl: '../../../assets/home/2.png',
            routerLink: '/gallery/season-2',
            title: 'Season 2',
            desc: `${this.galleryProvider.countCollectionImages(
                'season-2'
            )} photos`
        },
        {
            imageUrl: '../../../assets/home/3.png',
            routerLink: '/gallery/season-3',
            title: 'Season 3',
            desc: `${this.galleryProvider.countCollectionImages(
                'season-3'
            )} photos`
        }
    ];
}
