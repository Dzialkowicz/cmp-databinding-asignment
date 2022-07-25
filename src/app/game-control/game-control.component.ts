import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { countReset } from 'console';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('gc-incNumber') incNumber = new EventEmitter<{counter: number}>();
  counter;
  initNumber: number = 0; 
  constructor() { }

  ngOnInit(): void {
  }

  startCounting(): void {
    this.counter = setInterval(() => {
      console.log(this.initNumber)
      this.incNumber.emit({counter: this.initNumber++
    })}, 1000, 0)

    console.log(this.initNumber)
  }
  setInitNumber = {
    
  }

  stopCounting(): void {
    clearInterval(this.counter)
  }

}
