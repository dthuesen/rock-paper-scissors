import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  scoreTitle: string;
  // (T) Input from GameComponent 'playersScore'
  @Input('playersScore') playersScore: string;
  // (T) Input from GameComponent 'computersScore'
  @Input('computersScore') computersScore: string;

  constructor() {
    this.scoreTitle = 'Spielstand:';
  }


}
