import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionCardComponent } from './caption-card.component';

describe('CaptionCardComponent', () => {
  let component: CaptionCardComponent;
  let fixture: ComponentFixture<CaptionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaptionCardComponent]
    });
    fixture = TestBed.createComponent(CaptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
