import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up } from './up';

describe('Up', () => {
  let component: Up;
  let fixture: ComponentFixture<Up>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Up],
    }).compileComponents();

    fixture = TestBed.createComponent(Up);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
