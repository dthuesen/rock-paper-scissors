/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ComputerComponent } from '../computer/computer.component';
import { GameComponent } from './game.component';
import { PlayerComponent } from '../player/player.component';
import { ScoreComponent } from '../score/score.component';
import { WinnerDisplayComponent } from '../winner-display/winner-display.component';

describe('Rock, Paper, Stone Game - GameComponent (container component)', () => {

  beforeEach( () => {
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
  });

  describe('/ Component parts', () => {
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

    describe('/ Game view', () => {

      it('should render title in a h1 tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Schere, Stein, Papier');
      });

      it('should be able to render PlayerComponent tag (<app-player>)', () => {
        const compiled = fixture.debugElement.query(By.css('app-player'));
        expect(compiled).not.toBe(null);
      });

      it('should be able to render ComputerComponent tag (<app-computer>)', () => {
        const compiled = fixture.debugElement.query(By.css('app-computer'));
        expect(compiled).not.toBe(null);
      });

      it('should be able to render ComputerComponent tag (<app-winner-display>)', () => {
        const compiled = fixture.debugElement.query(By.css('app-winner-display'));
        expect(compiled).not.toBe(null);
      });

      it('should be able to render ComputerComponent tag (<app-score>)', () => {
        const compiled = fixture.debugElement.query(By.css('app-score'));
        expect(compiled).not.toBe(null);
      });

      it('should render button "Neustart"', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button#new-game').textContent).toContain('Neustart');
      });

      it('should render button "Neustart"', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button#new-game').textContent).toContain('Neustart');
      });
    });

    describe('/ Gamelogic', () => {

      describe('/ Game - properties', () => {

        it(`should have a property title: 'Schere, Stein, Papier'`, () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.title).toEqual('Schere, Stein, Papier');
        });

        it('should have a property "playersScore"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.playersScore).toBeTruthy;
          expect(app.playersScore).not.toBe(undefined);
        });

        it('should have a property "computersScore"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.computersScore).toBeTruthy;
          expect(app.computersScore).not.toBe(undefined);
        });

        it('should have a property "playersChoice"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.playersChoice).toBeTruthy;
          expect(app.playersChoice).not.toBe(undefined);
        });

        it('should have a property "computersChoice"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.computersChoice).toBeTruthy;
          expect(app.computersChoice).not.toBe(undefined);
        });

        it('should have a property "winnerDisplayText"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.winnerDisplayText).not.toBe(undefined);
        });

        it('should have a property "playerText"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.playerText).toBeTruthy;
          expect(app.playerText).not.toBe(undefined);
        });

        it('should have a property "computerText"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.computerText).toBeTruthy;
          expect(app.computerText).not.toBe(undefined);
        });

        it('should have a property boolean "restartIsActive"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.restartIsActive).not.toBe(undefined);
          expect(app.restartIsActive).toBe(false);
        });

      });

      describe('/ Game - methods', () => {

        it('should have a method "startGame()"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.startGame).not.toBe(undefined);
        });

        it('should have a method "displayStartHeadlines()"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.displayStartHeadlines).not.toBe(undefined);
        });

        it('displayStartHeadlines() should set the right start headlines', () => {
          fixture.detectChanges();
          const computerText = 'Computer wartet auf dich...';
          const playerText   = 'Spiel deine Hand!';
          const app = fixture.debugElement.componentInstance;
          app.displayStartHeadlines();
          expect(app.computerText === computerText).toBe(true);
          expect(app.playerText === playerText).toBe(true);
        });

        it('should have a method "setPlayersChoice()"', () => {
          fixture.detectChanges();
          const app = fixture.debugElement.componentInstance;
          expect(app.setPlayersChoice).not.toBe(undefined);
        });

        it('"setPlayersChoice()" should set property "restartIsActive" to true', () => {
          const app = fixture.debugElement.componentInstance;
          app.setPlayersChoice('rock');
          expect(app.restartIsActive).toBe(true);
        });

        it('should have a method "setComputersChoice()"', () => {
          fixture.detectChanges();
          const app = fixture.debugElement.componentInstance;
          expect(app.setComputersChoice).not.toBe(undefined);
        });

        it('should have a method "setComputersChoiceText()"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.setComputersChoiceText).not.toBe(undefined);
        });

        it('setComputersChoiceText(1) should translate "Computer spielt Stein"', () => {
          const computerText = 'Computer spielt Stein';
          const app = fixture.debugElement.componentInstance;
          app.setComputersChoiceText(1);
          expect(app.computerText === computerText).toBe(true);
        });

        it('setComputersChoiceText(2) should translate "Computer spielt Papier"', () => {
          const computerText = 'Computer spielt Papier';
          const app = fixture.debugElement.componentInstance;
          app.setComputersChoiceText(2);
          expect(app.computerText === computerText).toBe(true);
        });

        it('setComputersChoiceText(3) should translate "Computer spielt Schere"', () => {
          const computerText = 'Computer spielt Schere';
          const app = fixture.debugElement.componentInstance;
          app.setComputersChoiceText(3);
          expect(app.computerText === computerText).toBe(true);
        });

        it('should have a method "countdown()"', () => {
          fixture.detectChanges();
          const app = fixture.debugElement.componentInstance;
          expect(app.countdown).not.toBe(undefined);
        });

        it('should have a method "randomNumber()"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.randomNumber).not.toBe(undefined);
        });

        it('should have a method "calculateWinner()"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.calculateWinner).not.toBe(undefined);
        });

        it('"calculateWinner()" should do it right :-) ', () => {
          const winnerDisplayText = 'Papier wickelt den Stein ein. \n Du gewinnst!';
          const app = fixture.debugElement.componentInstance;
          app.calculateWinner(2, 1);
          expect(app.winnerDisplayText === winnerDisplayText).toBe(true);
        });

        it('should have a method "newGame()"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.newGame).not.toBe(undefined);
        });

        it('"newGame()" should reset all properties', () => {
          const playersScore      = 0;
          const computersScore    = 0;
          const winnerDisplayText = '';
          const playersChoice     = null;
          const computersChoice   = null;
          const playerText       = 'Spiel deine Hand!';
          const computerText     = 'Computer wartet auf dich...';
          fixture.detectChanges();
          const app = fixture.debugElement.componentInstance;
          app.newGame();
          console.log('app.computerText: ', app.computerText)
          expect(app.playersScore === playersScore).toBe(true);
          expect(app.computersScore === computersScore).toBe(true);
          expect(app.winnerDisplayText === winnerDisplayText).toBe(true);
          expect(app.playersChoice).toBe(null);
          expect(app.computersChoice).toBe(null);
          expect(app.playerText === playerText).toBe(true);
          expect(app.computerText === computerText).toBe(true);
        });


      });

    });

    /**
     *  This test suite ist disabled!
     *  I makes testing slow.
     */
    xdescribe('/ Gamelogic - timing tests', () => {

        describe('/ Gamelogic timing tests - properties', () => {
          // let timeout;

          it('Before 0.8s the property "computerText" should be empty',  () => {
            fixture.detectChanges();
            const app = fixture.debugElement.componentInstance;
            app.countdown();
            setTimeout( () => {
              expect(app.computerText).toEqual('' || 'Computer wartet auf dich...');
            }, 795);
          });

          it('Before 2.5s the property "computerText" should NOT contain "Stein"',  () => {
            fixture.detectChanges();
            const app = fixture.debugElement.componentInstance;
            app.countdown();
            setTimeout( () => {
              expect(app.computerText).not.toContain('Stein');
            }, 2499);
          });

          it('Before 3.5s the property "computerText" should NOT contain "Papier"',  () => {
            fixture.detectChanges();
            const app = fixture.debugElement.componentInstance;
            app.countdown();
            setTimeout( () => {
              expect(app.computerText).not.toContain('Papier');
            }, 3499);
          });
        });

        describe('/ Gamelogic timing tests - methods', () => {

          it('After 0.8s the method countdown() should set property "computerText" to "Schere"',  () => {
            fixture.detectChanges();
            const app = fixture.debugElement.componentInstance;
            app.countdown();
            setTimeout( () => {
              expect(app.computerText).toContain('Schere');
            }, 800);
          });

          it('After 2.5s the method countdown() should set property "computerText" to "Stein"',  () => {
            fixture.detectChanges();
            const app = fixture.debugElement.componentInstance;
            app.countdown();
            setTimeout( () => {
              expect(app.computerText).toContain('Stein');
            }, 2500);
          });

          it('After 3.5s the method countdown() should set property "computerText" to "Papier"',  () => {
            fixture.detectChanges();
            const app = fixture.debugElement.componentInstance;
            app.countdown();
            setTimeout( () => {
              expect(app.computerText).toContain('Papier');
            }, 3500);
          });

        });

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

