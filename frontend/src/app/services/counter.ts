import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  counter = 0;
  actionsNumber = 0;
  steps = 1;

  constructor() {
    this.load(); // Load from localStorage on service creation
  }

  increment() {
    this.actionsNumber++;
    this.counter += this.steps;
    this.updateStep();
    this.save();
  }

  decrement() {
    this.actionsNumber++;
    this.counter -= this.steps;
    this.updateStep();
    this.save();
  }

  reset() {
    this.counter = 0;
    this.actionsNumber = 0;
    this.steps = 1;
    this.save();
  }

  private updateStep() {
    if (this.actionsNumber % 30 === 0) {
      this.steps *= 2;
    }
  }


  private save() {
    localStorage.setItem(
      'counterState',
      JSON.stringify({
        counter: this.counter,
        actionsNumber: this.actionsNumber,
        steps: this.steps,
      })
    );
  }

  private load() {
    const data = localStorage.getItem('counterState');
    if (!data) return;

    const state = JSON.parse(data);
    this.counter = state.counter ?? 0;
    this.actionsNumber = state.actionsNumber ?? 0;
    this.steps = state.steps ?? 1;
  }
}
