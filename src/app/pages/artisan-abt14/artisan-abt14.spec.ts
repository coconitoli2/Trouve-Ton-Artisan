import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt14 } from './artisan-abt14';

describe('ArtisanAbt14', () => {
  let component: ArtisanAbt14;
  let fixture: ComponentFixture<ArtisanAbt14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt14],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
