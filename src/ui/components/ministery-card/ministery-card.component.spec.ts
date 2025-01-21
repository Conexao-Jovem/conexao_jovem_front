import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisteryCardComponent } from './ministery-card.component';

describe('MinisteryCardComponent', () => {
  let component: MinisteryCardComponent;
  let fixture: ComponentFixture<MinisteryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinisteryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinisteryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
