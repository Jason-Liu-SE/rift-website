import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ICaptionCard } from 'src/app/interfaces/slideshow-image.interface';

@Component({
    selector: 'app-image-showcase-section',
    templateUrl: './image-showcase-section.component.html',
    styleUrls: ['./image-showcase-section.component.scss']
})
export class ImageShowcaseSectionComponent {
    @Input({ required: true })
    public captionedImages!: ICaptionCard[];
    @Input() public pageCaption: string = '';

    public isPopUpVisible: boolean = false;
    public length = 50;
    public pageSize = 20;
    public pageIndex = 0;
    public pageEvent!: PageEvent;
    public popUpImage: string = '';
    public popUpCaption: string = '';

    public handlePageEvent(e: PageEvent) {
        this.pageEvent = e;
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
    }

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
