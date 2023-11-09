import { Component, Input } from '@angular/core';
import { ICaptionCard } from 'src/app/interfaces/slideshow-image.interface';

@Component({
    selector: 'app-image-slideshow',
    templateUrl: './image-slideshow.component.html',
    styleUrls: ['./image-slideshow.component.scss']
})
export class ImageSlideshowComponent {
    @Input({ alias: 'src', required: true }) public imageUrl!: string;
    @Input() public caption: string = '';
    @Input() public captionedImages: ICaptionCard[] = [];
    @Input() public startingIndex: number = 0;
}
