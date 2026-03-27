import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  counter = 0;


  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
 reset() {
  this.counter= 0;
 }



}
