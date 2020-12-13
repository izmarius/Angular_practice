import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  timer: NodeJS.Timeout;
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.timer = setInterval(() => {
      this.counter++;
      this.gameStarted.emit(this.counter);
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
  }

}
