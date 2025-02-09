import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMinisteryPage } from './new.component';

describe('NewMinisteryPage', () => {
  let component: NewMinisteryPage;
  let fixture: ComponentFixture<NewMinisteryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMinisteryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMinisteryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
