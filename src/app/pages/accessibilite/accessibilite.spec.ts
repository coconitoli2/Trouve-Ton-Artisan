import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessibilite } from './accessibilite';

describe('Accessibilite', () => {
  let component: Accessibilite;
  let fixture: ComponentFixture<Accessibilite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accessibilite],
    }).compileComponents();

    fixture = TestBed.createComponent(Accessibilite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
