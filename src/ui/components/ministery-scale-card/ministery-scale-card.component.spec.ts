import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisteryScaleCardComponent } from './ministery-scale-card.component';

describe('MinisteryScaleCardComponent', () => {
  let component: MinisteryScaleCardComponent;
  let fixture: ComponentFixture<MinisteryScaleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinisteryScaleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinisteryScaleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
