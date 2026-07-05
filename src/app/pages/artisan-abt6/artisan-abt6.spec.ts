import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt6 } from './artisan-abt6';

describe('ArtisanAbt6', () => {
  let component: ArtisanAbt6;
  let fixture: ComponentFixture<ArtisanAbt6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt6],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
