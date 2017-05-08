import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { HighscoresService } from '../highscores.service';
import { Highscore } from '../shared/highscore.model';

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

  computerText     = 'Computer wartet auf dich...';
  playerText       = 'Spiel deine Hand!';

  // Properties for computing and showing highscores
  currentScore = {
    namePlayer: '',
    scorePlayer: 0,
    scoreComputer: 0,
    score: 0
  };
  highscores: Highscore[];
  sortedHighscores: Highscore[];

  // Properties for showing and hiding components
  restartIsActive  = false;
  buttonsDisabled  = false;
  saveHighscoreVisible  = false;
  showPlayerAndComputer = true;

  constructor(
    @Inject(HighscoresService)
    private highscoresService: HighscoresService
  ) {
    this.highscores = highscoresService.highscores;
    this.sortedHighscores = highscoresService.sortedHighscores;
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
      case 'fountain':
        this.playersChoice = 5;
        this.playerText = 'Du spielst Brunnen.';
        this.countdown();
        break;
      case 'match':
        this.playersChoice = 9;
        this.playerText = 'Du spielst Streichholz.';
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
    this.buttonsDisabled = false;
    this.restartIsActive = true;
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
      case 5:
        this.computerText = 'Computer spielt Brunnen';
        break;
      case 9:
        this.computerText = 'Computer spielt Streichholz';
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
    }, 1500);

    setTimeout( () => {
      this.computerText = 'Papier';
    }, 2500);

    setTimeout( () => {
      this.computerText = 'Brunnen';
    }, 3500);

    setTimeout( () => {
      this.computerText = 'Streichholz';
    }, 4500);

    setTimeout( () => {
      this.setComputersChoice();
    }, 5000);

  }

  lookup(index: number  = 1) {
    const  lookupTable = [1, 2, 3, 5, 9];
    return lookupTable[index - 1];
  }

  // (T) Simulates the computers choice
  randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }

  // (T) This method has two tasks:
  // it sets the text who won and sets the score.
  calculateWinner(player: number, computer: number) {
    const value = player + computer;
    console.log('player:', player);
    console.log('computer:', computer);
    console.log('value:', value);
    if (player === computer) {
      this.winnerDisplayText = 'Unentschieden!';
      this.reason = 'Ihr habt beide haben das Gleiche gezogen!';
      return;
    }
    switch (value) {
      case 3:
        if (player > computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        this.reason = 'Papier wickelt den Stein ein';
        break;
      case 5:
        if (player > computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        this.reason = 'Schere schneidet Papier';
        break;
      case 4:
        if (player < computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        this.reason = 'Stein macht die Schere stumpf';
        break;
      case 8:
        if (player > computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        this.reason = 'Schere fällt in den Brunnen!';
        break;
      case 12:
        if (player < computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        this.reason = 'Schere zerschneidet Streichholz';
        break;
      case 7:
        if (player < computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        this.reason = 'Papier schwimmt im Brunnen';
        break;
      case 11:
        if (player > computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        this.reason = 'Streichholz verbrennt Papier';
        break;
      case 14:
        if (player > computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        this.reason = 'Streichhholz schwimmt im Brunnen';
        break;
      case 6:
        if (player > computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        this.reason = 'Stein fällt in den Brunnen';
        break;
      case 10:
        if (player < computer) {
          this.winnerDisplayText = 'Du gewinnst!';
          this.playersScore = this.playersScore + 1;
        } else {
          this.winnerDisplayText = 'Computer gewinnt!';
          this.computersScore = this.computersScore + 1;
        }
        this.reason = 'Stein zerschlägt Streichholz';
        break;
    }
    console.log(`Score - Du: ${this.playersScore} : ${this.computersScore} Computer `);
  }

  setPlayerData(event) {
    // Set players name to current score
    this.currentScore.namePlayer = event.namePlayer;

    // this.saveHighscore(this.currentScore);
    // Push highscores to service
    this.highscoresService.pushHighscore(this.currentScore);
    this.currentScore = {
      namePlayer: '',
      scorePlayer: 0,
      scoreComputer: 0,
      score: 0
    };
    this.saveHighscoreVisible  = false;
    this.showPlayerAndComputer = true;
    this.sortedHighscores = this.highscoresService.sortedHighscores;
  }

  showSaveHighscore() {
    // Show HighscoresComponent and hide PlayerComponent & ComputerComponent
    this.saveHighscoreVisible  = true;
    this.showPlayerAndComputer = false;
  }

  // Resets the properties to start values
  resetScores() {
    this.playersScore          = 0;
    this.computersScore        = 0;
    this.winnerDisplayText     = 'Neues Spiel, neues Glück!';
    this.playersChoice         = null;
    this.computersChoice       = null;
    this.playerText            = 'Spiel deine Hand!';
    this.computerText          = 'Computer wartet auf dich...';
    this.restartIsActive       = false;
    this.buttonsDisabled       = false;
  }

  // Sets the scores and starts a new game
  newGame() {
    this.currentScore.scorePlayer = this.playersScore;
    this.currentScore.scoreComputer = this.computersScore;

    this.showSaveHighscore();
    this.resetScores();
  }

}
