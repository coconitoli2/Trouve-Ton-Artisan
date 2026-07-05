import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt7 } from './artisan-abt7';

describe('ArtisanAbt7', () => {
  let component: ArtisanAbt7;
  let fixture: ComponentFixture<ArtisanAbt7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt7],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
