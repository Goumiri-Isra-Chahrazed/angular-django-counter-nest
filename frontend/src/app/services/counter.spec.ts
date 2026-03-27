import { TestBed } from '@angular/core/testing';
import { Counter } from './counter';

describe('Counter', () => {
  let service: Counter;

  beforeEach(() => {
    localStorage.clear();

    TestBed.configureTestingModule({});
    service = TestBed.inject(Counter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increment the counter by steps', () => {
    service.counter = 0;
    service.steps = 1;
    service.actionsNumber = 0;

    service.increment();
    expect(service.counter).toBe(1);
  });

  it('should decrement the counter by steps', () => {
    service.counter = 0;
    service.steps = 1;
    service.actionsNumber = 0;

    service.decrement();
    expect(service.counter).toBe(-1);
  });

  it('should double steps after 30 actionsNumber', () => {
    for (let i = 0; i < 30; i++) {
      service.increment();
    }

    expect(service.steps).toBe(2); // 1 → 2
  });

  it('should keep doubling steps every 30 actionsNumber', () => {
    for (let i = 0; i < 60; i++) {
      service.increment();
    }

    expect(service.steps).toBe(4); // 1 → 2 → 4
  });

  it('should reset counter, actionsNumber, and steps', () => {
    service.increment();
    service.increment();

    service.reset();

    expect(service.counter).toBe(0);
    expect(service.actionsNumber).toBe(0);
    expect(service.steps).toBe(1);
  });


});
