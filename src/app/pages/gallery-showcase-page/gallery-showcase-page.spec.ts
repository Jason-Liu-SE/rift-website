import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryShowcasePageComponent } from './gallery-showcase-page.component';

describe('GalleryShowcasePageComponent', () => {
    let component: GalleryShowcasePageComponent;
    let fixture: ComponentFixture<GalleryShowcasePageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GalleryShowcasePageComponent]
        });
        fixture = TestBed.createComponent(GalleryShowcasePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
