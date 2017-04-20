import { Component, OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  title = 'Stein, Schere, Papier';
  playersScore     = '';
  computersScore   = '';
  playersChoice    = '';
  computersChoice  = '';

  constructor() {}

  ngOnInit() {
  }
  
  startGame() {
    //
  }

}
