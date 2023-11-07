import { Component } from '@angular/core';
import { ICardSelection } from 'src/app/interfaces/card-selection.interface';

@Component({
    selector: 'app-page-gallery',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {
    public galleryData: ICardSelection[] = [
        {
            imageUrl: '../../../assets/home/1.png',
            routerLink: '/gallery/season-1',
            title: 'Season 1',
            desc: '5 photos'
        },
        {
            imageUrl: '../../../assets/home/2.png',
            routerLink: '/gallery/season-1',
            title: 'Season 2',
            desc: '15 photos'
        },
        {
            imageUrl: '../../../assets/home/3.png',
            routerLink: '/gallery/season-1',
            title: 'Season 3',
            desc: '112 photos'
        }
    ];
}
