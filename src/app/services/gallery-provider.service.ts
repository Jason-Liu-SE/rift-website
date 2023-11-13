import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../config/constants';

@Injectable({
    providedIn: 'root'
})
export class GalleryProviderService {
    private constants: Constants;

    constructor(private http: HttpClient) {
        this.constants = new Constants();
    }

    public getCollectionImagesObservable(
        collectionName: string,
        startIndex: number,
        numItems: number
    ): Observable<any> {
        return this.http.get<any>(
            this.constants.API_ENDPOINT +
                `/gallery/get-collection?collection=${collectionName}&&startIndex=${startIndex}&&limit=${numItems}`
        );
    }

    public getCollectionImageCountObservable(
        collectionName: string
    ): Observable<any> {
        return this.http.get<any>(
            this.constants.API_ENDPOINT +
                `/gallery/count-collection-items?collection=${collectionName}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
}
