import { Component } from '@angular/core';
import { Constants } from 'src/app/config/constants';

@Component({
    selector: 'app-map-season-one-page',
    templateUrl: './map-season-one-page.component.html',
    styleUrls: ['./map-season-one-page.component.scss']
})
export class MapSeasonOnePageComponent {
    public bluemapUrl: string;
    public serverUrl: string;

    public showHAMsg: boolean = true; // HA = Hardware Acceleration

    private constants: Constants = new Constants();

    constructor() {
        this.bluemapUrl = this.constants.BLUEMAP_URL;
        this.serverUrl = this.constants.API_ENDPOINT;
    }

    public toggleHAMsg(): void {
        this.showHAMsg = !this.showHAMsg;
    }
}
