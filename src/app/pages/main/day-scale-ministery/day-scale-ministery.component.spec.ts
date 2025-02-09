import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayScaleMinisteryPage } from './day-scale-ministery.component';

describe('DayScaleMinisteryPage', () => {
  let component: DayScaleMinisteryPage;
  let fixture: ComponentFixture<DayScaleMinisteryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayScaleMinisteryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayScaleMinisteryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
