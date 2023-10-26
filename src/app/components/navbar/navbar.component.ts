import { Component, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    @Input('transparent') public isTransparent: boolean = true;

    constructor(private viewportScroller: ViewportScroller) {}

    public handlePageScroll(elemId: string): void {
        this.viewportScroller.scrollToAnchor(elemId);
    }
}
