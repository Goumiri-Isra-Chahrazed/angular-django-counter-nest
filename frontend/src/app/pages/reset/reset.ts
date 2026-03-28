import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter';

@Component({
  selector: 'app-reset',
  imports: [],
  templateUrl: './reset.html',
  styleUrl: './reset.css',
})
export class Reset {
   counterService = inject(CounterService)
   reset(){
    this.counterService.reset();
   }
}
