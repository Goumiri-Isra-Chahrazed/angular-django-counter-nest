import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-down',
  imports: [    MatButtonModule,
    MatInputModule,],
  templateUrl: './down.html',
  styleUrl: './down.css',
})
export class Down {
   counterService = inject(CounterService);

     decrement() {
    this.counterService.decrement();
  }
}
