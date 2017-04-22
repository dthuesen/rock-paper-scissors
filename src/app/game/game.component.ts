import { Component, Output, EventEmitter } from '@angular/core';
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
    this.computerText = 'Computer wartet auf dich...';
    this.playerText   = 'Spiel deine Hand!';
  }

  // (T) Translates the Text of the button event into numbers.
  // Although this step is not necessary it makes the button
  // events more readable.
  setPlayersChoice(choice) {
    this.winnerDisplayText = '';
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
  }

  // (T) The computers choice (number) will be stored for
  // determining the winner later and calls at last
  // the translation (number into text)
  setComputersChoice() {
    const number = this.randomNumber();
    this.computersChoice = number;
    this.setComputersChoiceText(number);
    this.calculateWinner(this.playersChoice, this.computersChoice);
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
    switch (value) {
      case 3:
        if (player > computer) {
          this.winnerDisplayText = 'Papier wickelt den Stein ein. \n Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Papier wickelt den Stein ein. \n Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        break;
      case 5:
        if (player > computer) {
          this.winnerDisplayText = 'Schere schneidet Papier. \n Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Schere schneidet Papier. \n Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        break;
      case 4:
        if (player < computer) {
          this.winnerDisplayText = 'Stein macht die Schere stumpf. \n Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Stein macht die Schere stumpf. \n Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        break;
      default:
        this.winnerDisplayText = 'Ihr habt beide das Gleiche gezogen. \n Unentschieden!';
    }
    console.log(`Score - Du: ${this.playersScore} : ${this.computersScore} Computer `);
  }

  // (T) Resets the counter and starts a new game
  newGame() {
    this.playersScore      = 0;
    this.computersScore    = 0;
    this.winnerDisplayText = '';
    this.playersChoice     = null;
    this.computersChoice   = null;
    this.playerText       = '';
    this.computerText     = '';
    this.startGame();
  }

}
