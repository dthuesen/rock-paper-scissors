import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Output() choiceSet = new EventEmitter();

  title: String = '';
  buttons = {
    'Stein': false,
    'Papier': false,
    'Schere': false
  };

  constructor() {}

  ngOnInit() {
  }

  setPlayersChoice(choice) {
    console.log('The choice is: ', choice);
    this.choiceSet.emit(choice);
  }

}
