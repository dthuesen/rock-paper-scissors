import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ComputerComponent } from '../computer/computer.component';
import { GameComponent } from './game.component';
import { PlayerComponent } from '../player/player.component';
import { ScoreComponent } from '../score/score.component';
import { WinnerDisplayComponent } from '../winner-display/winner-display.component';

describe('Rock, Paper, Stone Game', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ComputerComponent,
        GameComponent,
        PlayerComponent,
        ScoreComponent,
        WinnerDisplayComponent
      ]
    })
    .compileComponents();
  }));

  describe('GameComponent (container component)', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(GameComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it(`should have a property title 'Stein, Schere, Papier'`, async( () => {
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Stein, Schere, Papier');
    }));

    it('should render title in a h1 tag', async( () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Stein, Schere, Papier');
    }));

    it('should be able to render PlayerComponent tag (<app-player>)', async( () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('app-player'));
      expect(compiled).not.toBe(null);
    }));

    it('should be able to render ComputerComponent tag (<app-computer>)', async( () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('app-computer'));
      expect(compiled).not.toBe(null);
    }));

    it('should be able to render ComputerComponent tag (<app-winner-display>)', async( () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('app-winner-display'));
      expect(compiled).not.toBe(null);
    }));

    it('should be able to render ComputerComponent tag (<app-score>)', async( () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('app-score'));
      expect(compiled).not.toBe(null);
    }));

    describe('Gamelogic', () => {
      it(`should have a property 'playersScore'`, async( () => {
        const app = fixture.debugElement.componentInstance;
        expect(app.playersScore).not.toBe(undefined);
      }));

      it(`should have a property 'computersScore'`, async( () => {
        const app = fixture.debugElement.componentInstance;
        expect(app.computersScore).not.toBe(undefined);
      }));

      it(`should have a property 'playersChoice'`, async( () => {
        const app = fixture.debugElement.componentInstance;
        expect(app.playersChoice).not.toBe(undefined);
      }));

      it(`should have a property 'computersChoice'`, async( () => {
        const app = fixture.debugElement.componentInstance;
        expect(app.computersChoice).not.toBe(undefined);
      }));

      it(`should have a method 'startGame'`, async( () => {
        const app = fixture.debugElement.componentInstance;
        console.log(app.startGame);
        expect(app.startGame).not.toBe(undefined);
      }));
    });

  });

  describe('Child components of GameComponent', () => {

    it('should have a defined PlayerComponent', () => {
      let fixture: ComponentFixture<PlayerComponent>;
      fixture = TestBed.createComponent(PlayerComponent);
      const component = fixture.componentInstance;
      expect(component).toBeDefined();
    });

    it('should have a defined ComputerComponent', () => {
      let fixture: ComponentFixture<ComputerComponent>;
      fixture = TestBed.createComponent(ComputerComponent);
      const component = fixture.componentInstance;
      expect(component).toBeDefined();
    });

    it('should have a defined WinnerDisplayComponent', () => {
      let fixture: ComponentFixture<WinnerDisplayComponent>;
      fixture = TestBed.createComponent(WinnerDisplayComponent);
      const component = fixture.componentInstance;
      expect(component).toBeDefined();
    });

    it('should have a defined ScoreComponent', () => {
      let fixture: ComponentFixture<ScoreComponent>;
      fixture = TestBed.createComponent(ScoreComponent);
      const component = fixture.componentInstance;
      expect(component).toBeDefined();
    });

  });

});

