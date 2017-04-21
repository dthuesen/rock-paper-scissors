import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  @Output() choiceSet = new EventEmitter();
  @Input('playerDisplayText') playerDisplayText: string;

  title: String = '';
  buttons = {
    'Stein': false,
    'Papier': false,
    'Schere': false
  };

  constructor() {}

  setPlayersChoice(choice) {
    console.log('The choice is: ', choice);
    this.choiceSet.emit(choice);
  }

}
