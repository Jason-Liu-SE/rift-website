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
    public galleryCollections: ICardSelection[] = [];

    private mockData: any;

    constructor(private galleryProvider: GalleryProviderService) {
        this.mockData = [
            {
                imageUrl: '../../../assets/home/1.png',
                routerLink: '/gallery/season-1',
                title: 'Season 1'
            },
            {
                imageUrl: '../../../assets/home/2.png',
                routerLink: '/gallery/season-2',
                title: 'Season 2'
            },
            {
                imageUrl: '../../../assets/home/3.png',
                routerLink: '/gallery/season-3',
                title: 'Season 3'
            }
        ];

        this.setGalleryCollections();
    }

    private setGalleryCollections(): void {
        for (let i = 1; i < 7; i++) {
            this.galleryProvider
                .getCollectionImageCountObservable(`season-${i}`)
                .subscribe((data) => {
                    this.galleryCollections.push({
                        imageUrl: this.mockData[i - 1].imageUrl,
                        routerLink: this.mockData[i - 1].routerLink,
                        title: this.mockData[i - 1].title,
                        desc: `${data.count} photos`
                    });
                });
        }
    }
}
