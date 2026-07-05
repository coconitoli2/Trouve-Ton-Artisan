import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt15 } from './artisan-abt15';

describe('ArtisanAbt15', () => {
  let component: ArtisanAbt15;
  let fixture: ComponentFixture<ArtisanAbt15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt15],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
