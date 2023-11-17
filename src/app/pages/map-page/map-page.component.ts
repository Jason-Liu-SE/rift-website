import { Component, OnInit } from '@angular/core';
import { ICardSelection } from 'src/app/interfaces/card-selection.interface';

@Component({
    selector: 'app-page-map',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {
    public mapItems: ICardSelection[] = [
        {
            imageUrl: '../../../assets/home/1.png',
            routerLink: '/map/season-5',
            title: 'Season 5'
        }
    ];

    public ngOnInit(): void {}
}
