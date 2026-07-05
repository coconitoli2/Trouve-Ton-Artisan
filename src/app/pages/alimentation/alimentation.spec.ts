import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLink } from '@angular/router';
import { Alimentation } from './alimentation';
import { StarRatingComponent } from '../../star-rating/star-rating';

describe('Alimentation', () => {
  let component: Alimentation;
  let fixture: ComponentFixture<Alimentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alimentation, StarRatingComponent, RouterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(Alimentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
