import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss']
})
export class HighscoresComponent {

  playersData = {
    namePlayer: ''
  };

  @Output() savePlayerData = new EventEmitter();

  constructor() {
    this.playersData = {
        namePlayer: 'noname'
    };
  }

  savePlayer(data) {
    this.playersData.namePlayer = data.name;
    this.emitPlayerData();
  }

  emitPlayerData() {
    this.savePlayerData.emit(this.playersData);
  }

}
