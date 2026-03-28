import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset',
  imports: [    MatButtonModule,
    MatInputModule,    FormsModule,
],
  templateUrl: './reset.html',
  styleUrl: './reset.css',
})
export class Reset {
   counterService = inject(CounterService)
   reset(){
    this.counterService.reset();
   }
}
