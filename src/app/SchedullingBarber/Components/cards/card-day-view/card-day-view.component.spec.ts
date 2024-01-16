import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDayViewComponent } from './card-day-view.component';

describe('CardDayViewComponent', () => {
  let component: CardDayViewComponent;
  let fixture: ComponentFixture<CardDayViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDayViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
