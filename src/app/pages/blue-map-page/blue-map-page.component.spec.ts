import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueMapPageComponent } from './blue-map-page.component';

describe('MapSeasonOnePageComponent', () => {
    let component: BlueMapPageComponent;
    let fixture: ComponentFixture<BlueMapPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BlueMapPageComponent]
        });
        fixture = TestBed.createComponent(BlueMapPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
