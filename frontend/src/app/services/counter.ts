import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  counter = 0;


  increment() {
    this.counter += 1;
  }






}
