import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCalendarComponent } from './accordion-calendar.component';

describe('AccordionCalendarComponent', () => {
  let component: AccordionCalendarComponent;
  let fixture: ComponentFixture<AccordionCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
