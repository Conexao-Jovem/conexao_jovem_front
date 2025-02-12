import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputModalComponent } from './user-input-modal.component';

describe('UserInputModalComponent', () => {
  let component: UserInputModalComponent;
  let fixture: ComponentFixture<UserInputModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInputModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
