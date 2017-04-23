/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ComputerComponent } from './computer/computer.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { ScoreComponent } from './score/score.component';
import { WinnerDisplayComponent } from './winner-display/winner-display.component';

import {
  MdButtonModule,
  MdCardModule,
  MdGridListModule
  } from '@angular/material';

xdescribe('AppComponent', () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ComputerComponent,
        GameComponent,
        PlayerComponent,
        ScoreComponent,
        WinnerDisplayComponent,
        MdButtonModule,
        MdCardModule,
        MdGridListModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
