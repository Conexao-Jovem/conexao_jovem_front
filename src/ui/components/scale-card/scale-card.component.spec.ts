import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleCardComponent } from './scale-card.component';

describe('ScaleCardComponent', () => {
  let component: ScaleCardComponent;
  let fixture: ComponentFixture<ScaleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
