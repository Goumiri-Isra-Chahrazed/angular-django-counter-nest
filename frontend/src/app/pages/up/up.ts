import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-up',
  imports: [    MatButtonModule,
    MatInputModule,],
  templateUrl: './up.html',
  styleUrl: './up.css',
})
export class Up {
    counterService = inject(CounterService);

  increase() {
    this.counterService.increment();
  }
}
