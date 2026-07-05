import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt18 } from './artisan-abt18';

describe('ArtisanAbt18', () => {
  let component: ArtisanAbt18;
  let fixture: ComponentFixture<ArtisanAbt18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt18],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
