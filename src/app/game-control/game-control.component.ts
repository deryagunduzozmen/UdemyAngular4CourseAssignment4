import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() gameStarted=new EventEmitter<number>();
Interval;
gameCount=0;
onStartGame()
{
  this.Interval=setInterval(()=>{
    this.gameStarted.emit(this.gameCount++);
  },1000)

}
onStopGame(){
  clearInterval(this.Interval);


}
  constructor() { }

  ngOnInit() {
  }

}
