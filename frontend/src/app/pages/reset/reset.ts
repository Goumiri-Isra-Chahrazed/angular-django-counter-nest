import { Component, inject } from '@angular/core';
import { Counter } from '../../services/counter';

@Component({
  selector: 'app-reset',
  imports: [],
  templateUrl: './reset.html',
  styleUrl: './reset.css',
})
export class Reset {
   counterService = inject(Counter)
   reset(){
    this.counterService.reset();
   }
}
