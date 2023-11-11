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

    public imageIndex: number = 0;
    public isPopUpVisible: boolean = false;

    public handleImageClick(imageButton: Element): void {
        const imageIndex: string | null = imageButton.getAttribute('index');

        this.imageIndex = imageIndex ? (imageIndex as unknown as number) : 0;
        this.isPopUpVisible = true;
    }

    public handleClose(): void {
        this.isPopUpVisible = false;
    }
}
