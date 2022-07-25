import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allNumbers = []
  storeNumbers(currentNumber: number) {
    return this.allNumbers.push(currentNumber);
  }

  oddOrEven(num: number) {
    if(num % 2) {
      console.log('Even:' + num)
      return true;
    }
    else {
      console.log('Odd:' + num)
      return false;
    }
  }
}
