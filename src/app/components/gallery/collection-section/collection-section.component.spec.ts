import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCardComponent } from './collection-section.component';

describe('CollectionCardComponent', () => {
    let component: CollectionCardComponent;
    let fixture: ComponentFixture<CollectionCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CollectionCardComponent]
        });
        fixture = TestBed.createComponent(CollectionCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
