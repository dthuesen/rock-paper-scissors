import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { routingComponents, appRouting } from './app.routing';

import { AppComponent } from './app.component';
import { ComputerComponent } from './computer/computer.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { ScoreComponent } from './score/score.component';
import { WinnerDisplayComponent } from './winner-display/winner-display.component';

// Add Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MaterialModule,
  MdButtonModule,
  MdCardModule,
  MdGridListModule
  } from '@angular/material';
import { HighscoresComponent } from './highscores/highscores.component';


@NgModule({
  declarations: [
    AppComponent,
    ComputerComponent,
    GameComponent,
    HomeComponent,
    PlayerComponent,
    routingComponents,
    ScoreComponent,
    WinnerDisplayComponent,
    HighscoresComponent,
  ],
  imports: [
    appRouting,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdButtonModule,
    MdGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
