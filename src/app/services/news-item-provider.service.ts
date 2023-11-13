import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../config/constants';

@Injectable({
    providedIn: 'root'
})
export class NewsItemProviderService {
    private constants: Constants = new Constants();

    constructor(private http: HttpClient) {}

    public getNewsItems(startIndex: number, numItems: number): Observable<any> {
        return this.http.get(
            this.constants.API_ENDPOINT +
                `/news/get-items?startIndex=${startIndex}&&limit=${numItems}`
        );
    }

    public countNewsItems(): Observable<any> {
        return this.http.get(this.constants.API_ENDPOINT + `/news/count-items`);
    }
}
