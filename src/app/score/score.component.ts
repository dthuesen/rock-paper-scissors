import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  scoreTitle: string;
  @Input('playersScore') playersScore: string;
  @Input('computersScore') computersScore: string;

  constructor() {
    this.scoreTitle = 'Spielstand:';
  }


}
