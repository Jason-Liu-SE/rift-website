import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-download-card',
    templateUrl: './download-card.component.html',
    styleUrls: ['./download-card.component.scss']
})
export class DownloadCardComponent implements OnInit {
    @Input() title: string = '';
    @Input() desc: string = '';
    @Input({ alias: 'src', required: true }) downloadUrl!: string;

    public showTitle: boolean = false;
    public showDesc: boolean = false;

    ngOnInit(): void {
        if (this.title !== '') {
            this.showTitle = true;
        }

        if (this.desc !== '') {
            this.showDesc = true;
        }
    }
}
