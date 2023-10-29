import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonOnePageComponent } from './season-one-page.component';

describe('SeasonOnePageComponent', () => {
  let component: SeasonOnePageComponent;
  let fixture: ComponentFixture<SeasonOnePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonOnePageComponent]
    });
    fixture = TestBed.createComponent(SeasonOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
