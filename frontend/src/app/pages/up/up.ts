import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter';

@Component({
  selector: 'app-up',
  imports: [],
  templateUrl: './up.html',
  styleUrl: './up.css',
})
export class Up {
    counterService = inject(CounterService);

  increase() {
    this.counterService.increment();
  }
}
