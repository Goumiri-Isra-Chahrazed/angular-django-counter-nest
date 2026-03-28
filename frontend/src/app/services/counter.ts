import { inject, Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { CommuneService } from './commune';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = signal(0);
  actionsNumber = signal(0);
  steps = signal(1);

  communeService = inject(CommuneService);

  constructor() {
    this.load();
  }

  increment() {
    this.actionsNumber.update(n => n + 1);
    this.counter.update(c => c + this.steps());
    this.updateStep();
    this.checkMelunReset();
    this.save();
  }

  decrement() {
    this.actionsNumber.update(n => n + 1);
    this.counter.update(c => c - this.steps());
    this.updateStep();
    this.checkMelunReset();
    this.save();
  }

  reset() {
    this.counter.set(0);
    this.actionsNumber.set(0);
    this.steps.set(1);
    this.save();
  }

  private updateStep() {
    if (this.actionsNumber() % 30 === 0) {
      this.steps.update(s => s * 2);
    }
  }

  private async checkMelunReset() {
    if (this.counter() === 77000) {
      const res = await firstValueFrom(
        this.communeService.checkPostcode('77000')
      );
      if (res.exists) {
        this.reset();
      }
    }
  }

  private save() {
    localStorage.setItem(
      'counterState',
      JSON.stringify({
        counter: this.counter(),
        actionsNumber: this.actionsNumber(),
        steps: this.steps(),
      })
    );
  }

  private load() {
    const data = localStorage.getItem('counterState');
    if (!data) return;

    const state = JSON.parse(data);
    this.counter.set(state.counter ?? 0);
    this.actionsNumber.set(state.actionsNumber ?? 0);
    this.steps.set(state.steps ?? 1);
  }

  jumpTo(value: number) {
    this.counter.set(value);
    this.checkMelunReset(); // trigger backend check
  }
}
