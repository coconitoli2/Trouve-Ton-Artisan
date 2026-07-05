import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt16 } from './artisan-abt16';

describe('ArtisanAbt16', () => {
  let component: ArtisanAbt16;
  let fixture: ComponentFixture<ArtisanAbt16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt16],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt16);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
