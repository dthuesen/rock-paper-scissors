import { Component, OnInit, HostListener, Host } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h1>Stein, Schere, Papier</h1>
      <button routerLink="/game">Spiel starten!</button>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
