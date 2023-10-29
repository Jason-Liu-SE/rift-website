import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageShowcasePageComponent } from './image-showcase-page.component';

describe('ImageShowcasePageComponent', () => {
    let component: ImageShowcasePageComponent;
    let fixture: ComponentFixture<ImageShowcasePageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ImageShowcasePageComponent]
        });
        fixture = TestBed.createComponent(ImageShowcasePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
