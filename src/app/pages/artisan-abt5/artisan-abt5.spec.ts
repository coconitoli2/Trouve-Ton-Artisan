import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt5 } from './artisan-abt5';

describe('ArtisanAbt5', () => {
  let component: ArtisanAbt5;
  let fixture: ComponentFixture<ArtisanAbt5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt5],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
