import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt23 } from './artisan-abt23';

describe('ArtisanAbt23', () => {
  let component: ArtisanAbt23;
  let fixture: ComponentFixture<ArtisanAbt23>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt23],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt23);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
