import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookings } from './add-bookings';

describe('AddBookings', () => {
  let component: AddBookings;
  let fixture: ComponentFixture<AddBookings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBookings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
