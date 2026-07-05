import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../star-rating/star-rating';
import { RouterModule } from '@angular/router';
import { ArtisanAbt3 } from './artisan-abt3';

describe('ArtisanAbt3', () => {
  let component: ArtisanAbt3;
  let fixture: ComponentFixture<ArtisanAbt3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt3, StarRatingComponent, CommonModule, RouterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
