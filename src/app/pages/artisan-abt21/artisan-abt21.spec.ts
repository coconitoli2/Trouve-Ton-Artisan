import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt21 } from './artisan-abt21';

describe('ArtisanAbt21', () => {
  let component: ArtisanAbt21;
  let fixture: ComponentFixture<ArtisanAbt21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt21],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt21);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
