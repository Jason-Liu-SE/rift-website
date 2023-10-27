import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSectionCardComponent } from './text-section-card.component';

describe('TextSectionCardComponent', () => {
  let component: TextSectionCardComponent;
  let fixture: ComponentFixture<TextSectionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextSectionCardComponent]
    });
    fixture = TestBed.createComponent(TextSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
