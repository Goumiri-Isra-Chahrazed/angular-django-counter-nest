import { TestBed } from '@angular/core/testing';
import { Counter } from './counter';
import { ActivatedRoute } from '@angular/router';

describe('Counter', () => {
  let service: Counter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Counter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ✅ Increment
  it('should increment the counter by step', () => {
    service.increment();
    expect(service.counter).toBe(1);
  });

  // ✅ Decrement
  it('should decrement the counter by step', () => {
    service.decrement();
    expect(service.counter).toBe(-1);
  });

  // ✅ Step doubling every 30 actions
  it('should double steps after 30 actions', () => {
    for (let i = 0; i < 30; i++) {
      service.increment();
    }

    expect(service.steps).toBe(2);
  });

  // ✅ Step doubling multiple times
  it('should keep doubling steps every 30 actions', () => {
    for (let i = 0; i < 60; i++) {
      service.increment();
    }

    expect(service.steps).toBe(4); // 1 → 2 → 4
  });


  // ✅ Reset
  it('should reset counter, actionsNumber and step', () => {
    service.increment();
    service.increment();

    service.reset();

    expect(service.counter).toBe(0);
    expect(service.actionsNumber).toBe(0);
    expect(service.steps).toBe(1);
  });
});
