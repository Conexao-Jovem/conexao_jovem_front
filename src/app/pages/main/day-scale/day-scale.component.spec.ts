import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayScalePage } from './day-scale.component';

describe('DayScalePage', () => {
  let component: DayScalePage;
  let fixture: ComponentFixture<DayScalePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayScalePage]
    }).compileComponents();

    fixture = TestBed.createComponent(DayScalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
