import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt13 } from './artisan-abt13';

describe('ArtisanAbt13', () => {
  let component: ArtisanAbt13;
  let fixture: ComponentFixture<ArtisanAbt13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt13],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
