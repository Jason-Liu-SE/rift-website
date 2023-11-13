import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IDownloadCollection } from '../interfaces/download-collection.interface';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../config/constants';

@Injectable({
    providedIn: 'root'
})
export class DownloadsProviderService {
    private constants: Constants = new Constants();

    constructor(private http: HttpClient) {}

    public getDownloadCollections(): Observable<any> {
        return this.http.get<any>(
            this.constants.API_ENDPOINT + `/downloads/get-all`
        );
    }
}
