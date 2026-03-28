import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter';

@Component({
  selector: 'app-down',
  imports: [],
  templateUrl: './down.html',
  styleUrl: './down.css',
})
export class Down {
   counterService = inject(CounterService);

     decrement() {
    this.counterService.decrement();
  }
}
