import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  counter = 0;
  actionsNumber = 0;
  steps = 1;

  increment() {
    this.actionsNumber++;
    this.updateStep();
    this.counter += this.steps;
  }

  decrement() {
    this.actionsNumber++;
    this.updateStep();
    this.counter -= this.steps;
  }

  reset() {
    this.counter = 0;
    this.actionsNumber = 0;
    this.steps = 1;
  }

  updateStep() {
    if (this.actionsNumber % 30 === 0) {
      this.steps *= 2;
    }
  }




}
