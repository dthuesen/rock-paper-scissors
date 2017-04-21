import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ComputerComponent } from './computer/computer.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { ScoreComponent } from './score/score.component';
import { WinnerDisplayComponent } from './winner-display/winner-display.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ComputerComponent,
        GameComponent,
        PlayerComponent,
        ScoreComponent,
        WinnerDisplayComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
