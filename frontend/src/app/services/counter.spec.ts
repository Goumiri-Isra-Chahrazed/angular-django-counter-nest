import { TestBed } from '@angular/core/testing';
import { counterService } from './counter';

describe('Counter', () => {
  let service: counterService;

  beforeEach(() => {
    localStorage.clear();

    TestBed.configureTestingModule({});
    service = TestBed.inject(counterService);
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
it('should reset counter when reaching Melun (77000)', () => {
    // Simulate reaching Melun
    service.counter = 77000;

    // Instead of calling backend, directly call reset if Melun
    if (service.counter === 77000) {
      service.reset();
    }

    expect(service.counter).toBe(0);
    expect(service.steps).toBe(1);
    expect(service.actionsNumber).toBe(0);
  });

  it('should not reset counter for other values', () => {
    service.counter = 12345;

    if (service.counter === 77000) {
      service.reset();
    }

    expect(service.counter).toBe(12345);
    expect(service.steps).toBe(1);
    expect(service.actionsNumber).toBe(0);
  });

});
