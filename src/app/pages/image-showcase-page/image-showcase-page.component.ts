import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-image-showcase-page',
    templateUrl: './image-showcase-page.component.html',
    styleUrls: ['./image-showcase-page.component.scss']
})
export class ImageShowcasePageComponent {
    public title: string;
    public imageUrl: string;

    // the title and imageUrl must be passed via the app-routing.module file as
    // 'data' elements
    constructor(private route: ActivatedRoute) {
        const title = this.route.snapshot.data['title'];
        const imageUrl = this.route.snapshot.data['imageUrl'];

        this.title = title == null ? 'Image Showcase Page' : title;
        this.imageUrl = imageUrl == null ? '' : imageUrl;
    }
}
