import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanAbt12 } from './artisan-abt12';

describe('ArtisanAbt12', () => {
  let component: ArtisanAbt12;
  let fixture: ComponentFixture<ArtisanAbt12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanAbt12],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanAbt12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
