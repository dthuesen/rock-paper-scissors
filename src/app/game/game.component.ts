import { Component, Output, EventEmitter } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  title = 'Schere, Stein, Papier';
  playersScore     = '';
  computersScore   = '';
  playersChoice:   number = null;
  computersChoice: number = null;

  playerText       = '';
  computerText     = '';

  constructor() {
    this.startGame();
  }

  // (T)
  startGame() {
    this.displayStartHeadlines();
  }

  // (T) Setting friendly text to start the game
  displayStartHeadlines() {
    this.computerText = 'Computer is waiting';
    this.playerText   = 'Spiel deine Hand!';
  }

  // (T) Translates the Text of the button event into numbers.
  // Although this step is not necessary it makes the button
  // events more readable.
  setPlayersChoice(choice) {
    console.log('In GameComponent players choice: ', choice);

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
        this.playersChoice = 3;
        this.countdown();
        break;
    }
  }

  // (T) The computers choice (number) will be stored for
  // determining the winner later and calls at last
  // the translation (number into text)
  setComputersChoice() {
    const number = this.randomNumber();
    this.computersChoice = number;
    this.setComputersChoiceText(number);
  }

  // (T) translates the computers choice (number) into text
  setComputersChoiceText(number) {

    switch (number) {
      case 1:
        this.computerText = 'Computer spielt: Schere';
        break;
      case 2:
        this.computerText = 'Computer spielt: Stein';
        break;
      case 3:
        this.computerText = 'Computer spielt: Papier';
        break;
    }
    console.log('Set computers choice: ', this.computerText);
  }

  // (T) Simulates the countdown 'Schere, Stein, Papier'
  // and sets it as text to display later in game component
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
    setTimeout( () => {
      this.setComputersChoice();
    }, 4500);
  }

  // (T) Simulates the computers choice
  randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }

  // Resets the counter and starts a new game
  newGame() {
    // TODO
  }

}
