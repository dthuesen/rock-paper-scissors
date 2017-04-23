import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  title = 'Schere, Stein, Papier';
  playersScore      = 0;
  computersScore    = 0;
  playersChoice:    number = null;
  computersChoice:  number = null;
  winnerDisplayText = '';
  reason            = '';
  reasons            = [
    'Papier wickelt den Stein ein',
    'Schere schneidet Papier',
    'Stein macht die Schere stumpf',
    'Ihr habt beide haben das Gleiche gezogen!'
    ];

  playerText       = '';
  computerText     = '';

  restartIsActive  = false;
  buttonsDisabled  = false;

  constructor() {
    this.startGame();
  }

  // (T)
  startGame() {
    this.displayStartHeadlines();
  }

  // (T) Setting friendly text to start the game
  displayStartHeadlines() {
    this.computerText = 'Computer wartet auf dich...';
    this.playerText   = 'Spiel deine Hand!';
  }

  // (T) Translates the Text of the button event into numbers.
  // Although this step is not necessary it makes the button
  // events more readable.
  setPlayersChoice(choice) {
    this.buttonsDisabled = true;
    this.winnerDisplayText = '';
    this.reason = '';
    console.log('In GameComponent players choice: ', choice);
    this.computerText = 'Abzählen...';
    switch (choice) {
      case 'rock':
        this.playersChoice = 1;
        this.playerText = 'Du spielst Stein.';
        this.countdown();
        break;
      case 'paper':
        this.playersChoice = 2;
        this.playerText = 'Du spielst Papier.';
        this.countdown();
        break;
      case 'scissors':
        this.playersChoice = 3;
        this.playerText = 'Du spielst Schere.';
        this.countdown();
        break;
    }
    this.restartIsActive = true;
  }

  setButtonsEnabled() {
    this.buttonsDisabled  = true;
  }

  // (T) The computers choice (number) will be stored for
  // determining the winner later and calls at last
  // the translation (number into text)
  setComputersChoice() {
    const number = this.randomNumber();
    console.log('randomNumber: ', number);
    this.computersChoice = number;
    this.setComputersChoiceText(number);
    this.calculateWinner(this.playersChoice, this.computersChoice);
    this.buttonsDisabled = false;
    console.log('Game: ', this.buttonsDisabled);
  }

  // (T) translates the computers choice (number) into text
  setComputersChoiceText(number: number) {

    switch (number) {
      case 1:
        this.computerText = 'Computer spielt Stein';
        break;
      case 2:
        this.computerText = 'Computer spielt Papier';
        break;
      case 3:
        this.computerText = 'Computer spielt Schere';
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

  // (T) This method has two tasks:
  // it sets the text who won and sets the score.
  calculateWinner(player: number, computer: number) {
    const value = player + computer;
    console.log('player:', player);
    console.log('computer:', computer);
    console.log('value:', value);
    if(player === computer) {
      this.winnerDisplayText = 'Unentschieden!';
      this.reason = this.reasons[3];
      return;
    }
    switch (value) {
       case 3:
        if (player > computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.reason = this.reasons[0];
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.reason = this.reasons[0];
          this.computersScore = this.computersScore + 1;
        }
        break;
      case 5:
        if (player > computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.reason = this.reasons[1];
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.reason = this.reasons[1];
          this.computersScore = this.computersScore + 1;
        }
        break;
      case 4:
        if (player < computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.reason = this.reasons[2];
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.reason = this.reasons[2];
          this.computersScore = this.computersScore + 1;
        }
        break;
    }
    console.log(`Score - Du: ${this.playersScore} : ${this.computersScore} Computer `);
  }

  // (T) Resets the counter and starts a new game
  newGame() {
    this.playersScore      = 0;
    this.computersScore    = 0;
    this.winnerDisplayText = 'Neues Spiel, neues Glück!';
    this.playersChoice     = null;
    this.computersChoice   = null;
    this.playerText        = 'Spiel deine Hand!';
    this.computerText      = 'Computer wartet auf dich...';
    this.restartIsActive   = false;
    this.buttonsDisabled   = false;
    this.startGame();
  }

}
