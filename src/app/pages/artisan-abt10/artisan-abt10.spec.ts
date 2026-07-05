import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt10 } from './artisan-abt10';

describe('ArtisanAbt10', () => {
  let component: ArtisanAbt10;
  let fixture: ComponentFixture<ArtisanAbt10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt10],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
