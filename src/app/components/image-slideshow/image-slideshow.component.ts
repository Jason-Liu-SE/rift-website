import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-slideshow',
    templateUrl: './image-slideshow.component.html',
    styleUrls: ['./image-slideshow.component.scss']
})
export class ImageSlideshowComponent {
    @Input({ alias: 'src', required: true }) public imageUrl!: string;
    @Input() public images: string[] = [];
    @Input() public startingIndex: number = 0;
}
