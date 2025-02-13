import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScaleComponent } from './new-scale.component';

describe('NewScaleComponent', () => {
  let component: NewScaleComponent;
  let fixture: ComponentFixture<NewScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewScaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
