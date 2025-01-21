import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterysPage } from './ministerys.component';

describe('MinisterysPage', () => {
  let component: MinisterysPage;
  let fixture: ComponentFixture<MinisterysPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinisterysPage]
    }).compileComponents();

    fixture = TestBed.createComponent(MinisterysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
