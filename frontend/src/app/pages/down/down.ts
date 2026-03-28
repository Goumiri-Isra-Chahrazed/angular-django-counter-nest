import { Component, inject } from '@angular/core';
import { counterService } from '../../services/counter';

@Component({
  selector: 'app-down',
  imports: [],
  templateUrl: './down.html',
  styleUrl: './down.css',
})
export class Down {
   counterService = inject(counterService);

     decrement() {
    this.counterService.decrement();
  }
}
