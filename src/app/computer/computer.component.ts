import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent {

  // (T)
  @Input('computerDisplayText') computerDisplayText: string;

  constructor() { }

}
