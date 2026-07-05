import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../star-rating/star-rating';
import { ArtisanAbt2 } from './artisan-abt2';

describe('ArtisanAbt2', () => {
  let component: ArtisanAbt2;
  let fixture: ComponentFixture<ArtisanAbt2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt2, CommonModule, StarRatingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
