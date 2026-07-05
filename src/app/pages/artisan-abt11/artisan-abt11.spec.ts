import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt11 } from './artisan-abt11';

describe('ArtisanAbt11', () => {
  let component: ArtisanAbt11;
  let fixture: ComponentFixture<ArtisanAbt11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt11],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
