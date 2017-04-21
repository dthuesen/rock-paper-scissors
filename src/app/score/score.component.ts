import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  title: 'Spielstand: ';
  @Input('playersScore') playersScore: string;
  @Input('computersScore') computersScore: string;

  constructor() { }


}
