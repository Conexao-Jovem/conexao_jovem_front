import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemberPage } from './new.component';

describe('NewMemberPage', () => {
  let component: NewMemberPage;
  let fixture: ComponentFixture<NewMemberPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMemberPage]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
