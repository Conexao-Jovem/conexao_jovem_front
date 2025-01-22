import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterySidebarCardComponent } from './ministery-sidebar-card.component';

describe('MinisterySidebarCardComponent', () => {
  let component: MinisterySidebarCardComponent;
  let fixture: ComponentFixture<MinisterySidebarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinisterySidebarCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinisterySidebarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
