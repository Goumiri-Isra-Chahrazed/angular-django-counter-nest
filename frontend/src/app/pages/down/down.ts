import { Component, inject } from '@angular/core';
import { Counter } from '../../services/counter';

@Component({
  selector: 'app-down',
  imports: [],
  templateUrl: './down.html',
  styleUrl: './down.css',
})
export class Down {
   counterService = inject(Counter);

     decrement() {
    this.counterService.decrement();
  }
}
