import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt17 } from './artisan-abt17';

describe('ArtisanAbt17', () => {
  let component: ArtisanAbt17;
  let fixture: ComponentFixture<ArtisanAbt17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt17],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt17);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
