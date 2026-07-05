import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt24 } from './artisan-abt24';

describe('ArtisanAbt24', () => {
  let component: ArtisanAbt24;
  let fixture: ComponentFixture<ArtisanAbt24>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt24],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt24);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
