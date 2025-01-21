import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDotIconComponent } from './two-dot-icon.component';

describe('TwoDotIconComponent', () => {
  let component: TwoDotIconComponent;
  let fixture: ComponentFixture<TwoDotIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoDotIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoDotIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
