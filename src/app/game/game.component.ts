import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  title = 'Schere, Stein, Papier';
  playersScore     = '';
  computersScore   = '';
  playersChoice:   number = null;
  computersChoice: number = null;

  computerText: String = '';

  constructor() {}

  ngOnInit() {
  }

  startGame() {
    //
  }

  displayStartHeadlines() {
    //
  }

  setPlayersChoice(choice) {
    console.log('In GameComponent choice: ', choice);

    switch (choice) {
      case 'rock':
        this.playersChoice = 1;
        this.countdown();
        break;
      case 'paper':
        this.playersChoice = 2;
        this.countdown();
        break;
      case 'scissors':
        this.computersChoice = 3;
        this.countdown();
        break;
    }
  }

  countdown() {
    setTimeout( () => {
      this.computerText = 'Schere';
    }, 800);
    setTimeout( () => {
      this.computerText = 'Stein';
    }, 2500);
    setTimeout( () => {
      this.computerText = 'Papier';
    }, 3500);
  }

  randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }

  newGame() {
    //
  }

}
