import { inject, Injectable, signal } from '@angular/core';
import { CommuneService } from './commune';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = signal(0);
  actionsNumber = signal(0);
  steps = signal(1);

  private communeService = inject(CommuneService);

  private communes = signal<string[]>([]);

  constructor() {
    this.load();
    this.loadCommunes();
  }

  private loadCommunes() {
    this.communeService.getCommunes()
      .pipe(
        tap(communes => {
          const postcodes = communes.map(c => c.postcode);
          this.communes.set(postcodes);
        })
      )
      .subscribe();
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

  private checkMelunReset() {
    if (this.counter() === 77000) {
      const exists = this.communes().includes('77000');
      if (exists) {
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
    this.checkMelunReset();
  }
}
