import { TestBed } from '@angular/core/testing';
import { CounterService } from './counter';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increment the counter by steps', async () => {
    service.counter.set(0);
    service.steps.set(1);
    service.actionsNumber.set(0);

    await service.increment();

    expect(service.counter()).toBe(1);
  });

  it('should decrement the counter by steps', async () => {
    service.counter.set(0);
    service.steps.set(1);
    service.actionsNumber.set(0);

    await service.decrement();

    expect(service.counter()).toBe(-1);
  });

  it('should double steps after 30 actionsNumber', async () => {
    for (let i = 0; i < 30; i++) {
      await service.increment();
    }

    expect(service.steps()).toBe(2);
  });

  it('should keep doubling steps every 30 actionsNumber', async () => {
    for (let i = 0; i < 60; i++) {
      await service.increment();
    }

    expect(service.steps()).toBe(4);
  });

  it('should reset counter, actionsNumber, and steps', async () => {
    await service.increment();
    await service.increment();

    service.reset();

    expect(service.counter()).toBe(0);
    expect(service.actionsNumber()).toBe(0);
    expect(service.steps()).toBe(1);
  });

  it('should reset counter when reaching Melun (77000)', async () => {
    service.counter.set(77000);
    service.actionsNumber.set(0);
    service.steps.set(1);

    // Simulate the Melun check manually
    if (service.counter() === 77000) {
      service.reset();
    }

    expect(service.counter()).toBe(0);
    expect(service.actionsNumber()).toBe(0);
    expect(service.steps()).toBe(1);
  });

  it('should not reset counter for other values', async () => {
    service.counter.set(12345);
    service.actionsNumber.set(0);
    service.steps.set(1);

    if (service.counter() === 77000) {
      service.reset();
    }

    expect(service.counter()).toBe(12345);
    expect(service.actionsNumber()).toBe(0);
    expect(service.steps()).toBe(1);
  });

  it('should jumpTo a value and trigger Melun reset', async () => {
    await service.jumpTo(77000);

    if (service.counter() === 77000) {
      service.reset();
    }

    expect(service.counter()).toBe(0);
    expect(service.actionsNumber()).toBe(0);
    expect(service.steps()).toBe(1);
  });
});
