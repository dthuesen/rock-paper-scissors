import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-winner-display',
  templateUrl: './winner-display.component.html',
  styleUrls: ['./winner-display.component.css']
})
export class WinnerDisplayComponent {

  @Input('winnerDisplayText') winnerDisplayText: string;

  // (T)
  constructor() {
    this.winnerDisplayText = '';
  }


}
