import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt19 } from './artisan-abt19';

describe('ArtisanAbt19', () => {
  let component: ArtisanAbt19;
  let fixture: ComponentFixture<ArtisanAbt19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt19],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
