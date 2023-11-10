import { Component, Input } from '@angular/core';
import { ICaptionCard } from 'src/app/interfaces/slideshow-image.interface';

@Component({
    selector: 'app-image-showcase-section',
    templateUrl: './image-showcase-section.component.html',
    styleUrls: ['./image-showcase-section.component.scss']
})
export class ImageShowcaseSectionComponent {
    @Input({ required: true })
    public captionedImages!: ICaptionCard[];

    public isPopUpVisible: boolean = false;
    public popUpImage: string = '';
    public popUpCaption: string = '';

    public handleImageClick(event: MouseEvent): void {
        const target: Element = event.target as Element;
        const imageUrl: string | null = target.getAttribute('image-url');
        const caption: string | null = target.getAttribute('caption');

        this.popUpImage = imageUrl ? (imageUrl as string) : '';
        this.popUpCaption = caption ? (caption as string) : '';
        this.isPopUpVisible = true;
    }

    public handleClose(): void {
        this.isPopUpVisible = false;
    }
}
