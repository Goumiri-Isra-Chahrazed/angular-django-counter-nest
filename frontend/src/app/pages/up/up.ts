import { Component, inject } from '@angular/core';
import { Counter } from '../../services/counter';

@Component({
  selector: 'app-up',
  imports: [],
  templateUrl: './up.html',
  styleUrl: './up.css',
})
export class Up {
    counterService = inject(Counter);

  increase() {
    this.counterService.increment();
  }
}
