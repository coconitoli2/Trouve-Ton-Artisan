import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt9 } from './artisan-abt9';

describe('ArtisanAbt9', () => {
  let component: ArtisanAbt9;
  let fixture: ComponentFixture<ArtisanAbt9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt9],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
