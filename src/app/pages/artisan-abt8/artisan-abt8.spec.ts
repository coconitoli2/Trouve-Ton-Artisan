import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt8 } from './artisan-abt8';

describe('ArtisanAbt8', () => {
  let component: ArtisanAbt8;
  let fixture: ComponentFixture<ArtisanAbt8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt8],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
