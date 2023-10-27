import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-text-section-card',
    templateUrl: './text-section-card.component.html',
    styleUrls: ['./text-section-card.component.scss']
})
export class TextSectionCardComponent implements OnInit {
    // optional properties
    @Input() public title: string = '';
    @Input() public content: string = '';
    @Input() public backgroundType!: string; // can be 'none', 'dark', or 'light' - default is 'light'
    @Input() public titlePosition!: string; // can be 'left', 'right', or 'center' - default is 'left'

    public titlePositionClass!: string;
    public backgroundTypeClass!: string;
    public showTitle!: boolean;
    public showContent!: boolean;

    ngOnInit(): void {
        // parsing title position information
        if (this.titlePosition === 'right') {
            this.titlePositionClass = 'right-align';
        } else if (this.titlePosition === 'center') {
            this.titlePositionClass = 'center-align';
        } else {
            this.titlePositionClass = 'left-align';
        }

        // parsing background type information
        if (this.backgroundType === 'none') {
            this.backgroundTypeClass = 'empty-background';
        } else if (this.backgroundType === 'dark') {
            this.backgroundTypeClass = 'dark-background';
        } else {
            this.backgroundTypeClass = 'light-background';
        }

        // parsing content information
        if (this.title === '') {
            this.showTitle = false;
        } else {
            this.showTitle = true;
        }

        if (this.content === '') {
            this.showContent = false;
        } else {
            this.showContent = true;
        }
    }
}
