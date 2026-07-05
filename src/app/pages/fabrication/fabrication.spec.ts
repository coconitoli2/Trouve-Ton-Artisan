import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLink } from '@angular/router';
import { Fabrication } from './fabrication';
import { StarRatingComponent } from '../../star-rating/star-rating';
describe('Fabrication', () => {
  let component: Fabrication;
  let fixture: ComponentFixture<Fabrication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fabrication, RouterLink, StarRatingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Fabrication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
