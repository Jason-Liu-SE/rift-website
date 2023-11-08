import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'http://localhost:4000';
    public readonly BLUEMAP_URL: string = 'http://localhost:8100';
}
