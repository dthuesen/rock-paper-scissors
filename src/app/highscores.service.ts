import { Injectable } from '@angular/core';
import { Highscore } from './shared/highscore.model';   // Import model

@Injectable()
export class HighscoresService {
  // Provide an empty array to push into
  highscores = [];
  // Construct an object with default values (from model)
  scoreCache = new Highscore();
  sortedHighscores = [];

  constructor() {}

  pushHighscore(score: Highscore) {
    this.calculateScore(score);
    this.scoreCache.namePlayer    = score.namePlayer;
    this.scoreCache.scorePlayer   = score.scorePlayer;
    this.scoreCache.scoreComputer = score.scoreComputer;

    this.highscores.push(this.scoreCache);

    // Instantiate a new default object otherwise the
    // existing one will be taken and its value only overwritten!!
    this.scoreCache = new Highscore();
    // let scores = this.highscores;
    // scores = this.highscores.sort( (a, b) => {
    const sorted = this.highscores.sort( (a, b) => {
      return  b.score - a.score;  // sorting high to low
    });
    this.sortedHighscores = sorted;
  }

  calculateScore(score: Highscore) {
    const player = score.scorePlayer;
    const computer = score.scoreComputer;
    this.scoreCache.score = (player - computer);
  }
}
