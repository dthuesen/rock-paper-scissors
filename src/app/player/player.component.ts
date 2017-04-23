import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  title: String  = '';

  // (T) Players choice output to GameComponent 'setPlayersChoice'
  @Output() choiceSet         = new EventEmitter();

  // (T) Input from GameComponent 'playerText'
  @Input('playerDisplayText') playerDisplayText: string;

  // (T) Input from GameComponent
  @Input('buttonsDisabled') buttonsDisabled: boolean;


  constructor() {}

  // (T) This emits the players choice up to
  // GameComponent (parent) property 'setPlayersChoice'
  setPlayersChoice(choice) {
    this.choiceSet.emit(choice);
  }

}
