import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

constructor() { }

count = 0;

countActions() {
  this.count++;
  console.log(this.count);
}

}
