import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../star-rating/star-rating';

import { ArtisanAbt1 } from './artisan-abt1';

describe('ArtisanAbt1', () => {
  let component: ArtisanAbt1;
  let fixture: ComponentFixture<ArtisanAbt1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt1, StarRatingComponent, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
