import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarRatingComponent } from '../../star-rating/star-rating';
import { ArtisanAbt4 } from './artisan-abt4';

describe('ArtisanAbt4', () => {
  let component: ArtisanAbt4;
  let fixture: ComponentFixture<ArtisanAbt4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt4, StarRatingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
