import { Component, inject } from '@angular/core';
import { counterService } from '../../services/counter';

@Component({
  selector: 'app-reset',
  imports: [],
  templateUrl: './reset.html',
  styleUrl: './reset.css',
})
export class Reset {
   counterService = inject(counterService)
   reset(){
    this.counterService.reset();
   }
}
