import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt20 } from './artisan-abt20';

describe('ArtisanAbt20', () => {
  let component: ArtisanAbt20;
  let fixture: ComponentFixture<ArtisanAbt20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt20],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt20);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
