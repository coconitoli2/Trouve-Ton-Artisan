import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt22 } from './artisan-abt22';

describe('ArtisanAbt22', () => {
  let component: ArtisanAbt22;
  let fixture: ComponentFixture<ArtisanAbt22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt22],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
