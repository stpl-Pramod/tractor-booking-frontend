import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tractors } from './tractors';

describe('Tractors', () => {
  let component: Tractors;
  let fixture: ComponentFixture<Tractors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tractors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tractors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
