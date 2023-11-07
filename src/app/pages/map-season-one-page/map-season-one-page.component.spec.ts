import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSeasonOnePageComponent } from './map-season-one-page.component';

describe('MapSeasonOnePageComponent', () => {
    let component: MapSeasonOnePageComponent;
    let fixture: ComponentFixture<MapSeasonOnePageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MapSeasonOnePageComponent]
        });
        fixture = TestBed.createComponent(MapSeasonOnePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
