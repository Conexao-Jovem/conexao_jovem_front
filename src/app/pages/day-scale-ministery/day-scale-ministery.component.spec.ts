import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayScaleMinisteryComponent } from './day-scale-ministery.component';

describe('DayScaleMinisteryComponent', () => {
  let component: DayScaleMinisteryComponent;
  let fixture: ComponentFixture<DayScaleMinisteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayScaleMinisteryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayScaleMinisteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
