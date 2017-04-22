import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  // (T)
  @Output() choiceSet         = new EventEmitter();
  @Input('playerDisplayText') playerDisplayText: string;

  // (X)
  @Input('buttonsDisabled') buttonsDisabled: boolean;

  title: String  = '';

  constructor() {}

  // (T) This emits the players choice up to
  // the game component (container component)
  setPlayersChoice(choice) {
    this.choiceSet.emit(choice);
  }

}
