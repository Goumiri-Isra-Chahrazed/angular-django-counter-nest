import { inject, Injectable, isDevMode } from '@angular/core';
import { CommuneService } from './commune';

@Injectable({
  providedIn: 'root',
})
export class counterService {
  counter = 0;
  actionsNumber = 0;
  steps = 1;
  communeService = inject(CommuneService);
  constructor() {
    this.load(); // Load from localStorage on service creation
  }

  increment() {
    this.actionsNumber++;
    this.counter += this.steps;
    this.updateStep();
    this.save();
    this.checkMelunReset();
  }

  decrement() {
    this.actionsNumber++;
    this.counter -= this.steps;
    this.updateStep();
    this.save();
    this.checkMelunReset();
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

checkMelunReset() {
  if (this.counter === 77000) {
    this.communeService.checkPostcode('77000').subscribe(res => {
      if (res.exists) {
        this.reset();
      }
    });
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
  jumpTo(value: number) {
    this.counter = value;
    this.checkMelunReset(); // trigger backend check
  }
}
