import { Injectable } from '@angular/core';
import { IDownloadCollection } from '../interfaces/download-collection.interface';

@Injectable({
    providedIn: 'root'
})
export class DownloadsProviderService {
    private downloadCollections: IDownloadCollection[];

    constructor() {
        this.downloadCollections = [
            {
                name: 'Worlds',
                items: [
                    {
                        title: 'Season 1',
                        desc: 'Meh',
                        downloadUrl: 'https://www.google.com',
                        backgroundUrl: '../../../assets/home/1.png'
                    },
                    {
                        title: 'Season 2',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                        downloadUrl: 'https://www.google.com',
                        backgroundUrl: '../../../assets/home/2.png'
                    },
                    {
                        title: 'Season 3',
                        desc: 'Meh',
                        downloadUrl: 'https://www.google.com',
                        backgroundUrl: '../../../assets/home/3.png'
                    }
                ]
            },
            {
                name: 'Other Stuff...',
                items: [
                    {
                        title: 'Season 1',
                        desc: 'BASewe wer',
                        downloadUrl: 'https://www.google.com',
                        backgroundUrl: '../../../assets/home/2.png'
                    },
                    {
                        title: 'Season 2',
                        desc: 'ASD ASD ASDASD',
                        downloadUrl: 'https://www.google.com',
                        backgroundUrl: '../../../assets/home/1.png'
                    },
                    {
                        title: 'Season 3',
                        desc: 'JHASDh jashjd kljASJLHD asjlkd ',
                        downloadUrl: 'https://www.google.com',
                        backgroundUrl: '../../../assets/home/3.png'
                    }
                ]
            }
        ];
    }

    public getDownloadCollections(): IDownloadCollection[] {
        return this.downloadCollections;
    }
}
