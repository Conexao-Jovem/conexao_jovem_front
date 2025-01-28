import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterysCardAccordionComponent } from './ministerys-card-accordion.component';

describe('MinisterysCardAccordionComponent', () => {
  let component: MinisterysCardAccordionComponent;
  let fixture: ComponentFixture<MinisterysCardAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinisterysCardAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinisterysCardAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
