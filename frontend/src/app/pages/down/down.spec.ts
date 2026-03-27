import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Down } from './down';

describe('Down', () => {
  let component: Down;
  let fixture: ComponentFixture<Down>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Down],
    }).compileComponents();

    fixture = TestBed.createComponent(Down);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
