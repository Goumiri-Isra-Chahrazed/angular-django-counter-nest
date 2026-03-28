import { Component, inject } from '@angular/core';
import { counterService } from '../../services/counter';

@Component({
  selector: 'app-up',
  imports: [],
  templateUrl: './up.html',
  styleUrl: './up.css',
})
export class Up {
    counterService = inject(counterService);

  increase() {
    this.counterService.increment();
  }
}
