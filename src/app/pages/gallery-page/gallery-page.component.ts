import { Component } from '@angular/core';
import { ICardSelection } from 'src/app/interfaces/card-selection.interface';
import { GalleryProviderService } from 'src/app/services/gallery-provider.service';
import { forkJoin, lastValueFrom } from 'rxjs';

@Component({
    selector: 'app-page-gallery',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {
    public galleryCollections: ICardSelection[] = [
        {
            imageUrl: '../../../assets/home/1.png',
            routerLink: '/gallery/season-5',
            title: 'Season 5',
            desc: ''
        },
        {
            imageUrl: '../../../assets/home/1.png',
            routerLink: '/gallery/season-6',
            title: 'Season 6',
            desc: ''
        }
    ];

    constructor(private galleryProvider: GalleryProviderService) {
        this.setGalleryCollections();
    }

    private setGalleryCollections(): void {
        for (let i = 1; i < 7; i++) {
            this.galleryProvider
                .getCollectionImageCountObservable(`season-${i}`)
                .subscribe((data) => {
                    this.galleryCollections[
                        i - 1
                    ].desc = `${data.count} photos`;
                });
        }
    }
}
