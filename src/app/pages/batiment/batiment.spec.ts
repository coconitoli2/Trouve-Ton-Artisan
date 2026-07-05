import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLink } from '@angular/router';
import { Batiment } from './batiment';
import { StarRatingComponent } from '../../star-rating/star-rating';


describe('Batiment', () => {
  let component: Batiment;
  let fixture: ComponentFixture<Batiment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Batiment, RouterLink, StarRatingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Batiment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
