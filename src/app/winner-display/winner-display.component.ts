import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-winner-display',
  templateUrl: './winner-display.component.html',
  styleUrls: ['./winner-display.component.css']
})
export class WinnerDisplayComponent {

  // (T) Input from GameComponent 'winnerDisplayText'
  @Input('winnerDisplayText') winnerDisplayText: string;
  @Input('reason') reason: string;

  // (T)
  constructor() {
    this.winnerDisplayText = '';
    this.reason = '';
  }


}
