import { Component, OnInit } from '@angular/core';
import { ICardSelection } from 'src/app/interfaces/card-selection.interface';

@Component({
    selector: 'app-page-map',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {
    public mapData: ICardSelection[] = [
        {
            imageUrl: '../../../assets/home/1.png',
            routerLink: '/map/season-1',
            title: 'Season 1'
        },
        {
            imageUrl: '../../../assets/home/2.png',
            routerLink: '/map/season-1',
            title: 'Season 2'
        },
        {
            imageUrl: '../../../assets/home/3.png',
            routerLink: '/map/season-1',
            title: 'Season 3'
        }
    ];

    public ngOnInit(): void {}
}
