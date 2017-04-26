/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ComputerComponent } from '../computer/computer.component';
import { GameComponent } from './game.component';
import { PlayerComponent } from '../player/player.component';
import { ScoreComponent } from '../score/score.component';
import { WinnerDisplayComponent } from '../winner-display/winner-display.component';
import { MdCard } from '@angular/material';

describe('Rock, Paper, Stone Game - GameComponent (container component)', () => {

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [
        ComputerComponent,
        GameComponent,
        PlayerComponent,
        ScoreComponent,
        WinnerDisplayComponent,
        MdCard
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
        const app = fixture.debugElement.componentInstance;
        app.restartIsActive = true;
        fixture.detectChanges();
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

        it('should have a property "reason"', () => {
          const app = fixture.debugElement.componentInstance;
          expect(app.reason).not.toBe(undefined);
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

        describe('/ 1. Game - methods general', () => {

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

          it('should have a method "newGame()"', () => {
            const app = fixture.debugElement.componentInstance;
            expect(app.newGame).not.toBe(undefined);
          });

          it('should have a method "countdown()"', () => {
            fixture.detectChanges();
            const app = fixture.debugElement.componentInstance;
            expect(app.countdown).not.toBe(undefined);
          });

          it('"newGame()" should reset all properties', () => {
            const playersScore      = 0;
            const computersScore    = 0;
            const winnerDisplayText = 'Neues Spiel, neues Glück!';
            const playersChoice     = null;
            const computersChoice   = null;
            const playerText       = 'Spiel deine Hand!';
            const computerText     = 'Computer wartet auf dich...';
            this.restartIsActive   = false;
            this.buttonsDisabled   = false;
            fixture.detectChanges();
            const app = fixture.debugElement.componentInstance;
            app.newGame();
            console.log('app.computerText: ', app.computerText);
            expect(app.playersScore === playersScore).toBe(true);
            expect(app.computersScore === computersScore).toBe(true);
            expect(app.winnerDisplayText === winnerDisplayText).toBe(true);
            expect(app.playersChoice).toBe(null);
            expect(app.computersChoice).toBe(null);
            expect(app.playerText === playerText).toBe(true);
            expect(app.computerText === computerText).toBe(true);
          });

        });

        describe('/ 2. Game - methods for player', () => {

          it('should have a method "setPlayersChoice()"', () => {
            fixture.detectChanges();
            const app = fixture.debugElement.componentInstance;
            expect(app.setPlayersChoice).not.toBe(undefined);
          });

          it('"setPlayersChoice(rock)" should set property "restartIsActive" to true', () => {
            const app = fixture.debugElement.componentInstance;
            app.setPlayersChoice('rock');
            expect(app.restartIsActive).toBe(true);
          });
          it('"setPlayersChoice(paper)" should set property "restartIsActive" to true', () => {
            const app = fixture.debugElement.componentInstance;
            app.setPlayersChoice('paper');
            expect(app.restartIsActive).toBe(true);
          });
          it('"setPlayersChoice(scissors)" should set property "restartIsActive" to true', () => {
            const app = fixture.debugElement.componentInstance;
            app.setPlayersChoice('scissors');
            expect(app.restartIsActive).toBe(true);
          });

        });

        describe('/ 3. Game - methods for computer', () => {

          it('should have a method "setComputersChoice()"', () => {
            fixture.detectChanges();
            const app = fixture.debugElement.componentInstance;
            expect(app.setComputersChoice).not.toBe(undefined);
          });

          it('"setComputersChoice()" it\'s variable should get a random number', () => {
            const app = fixture.debugElement.componentInstance;
            app.setComputersChoice();
            fixture.detectChanges();
            expect(app.computersChoice).toBeGreaterThan(0);
            expect(app.computersChoice).toBeLessThan(4);
          });

          it('"setComputersChoice()" should have called setComputersChoiceText()', () => {
            const app = fixture.debugElement.componentInstance;
            const spy = spyOn(component, 'setComputersChoiceText');
            app.setComputersChoice();
            fixture.detectChanges();
            expect(spy).toHaveBeenCalled();
          });

          it('"setComputersChoice()" should have called calculateWinner()', () => {
            const app = fixture.debugElement.componentInstance;
            const spy = spyOn(component, 'calculateWinner');
            app.setComputersChoice();
            fixture.detectChanges();
            expect(spy).toHaveBeenCalled();
          });

          it('"setComputersChoice()" should have set property buttonsDisabled to false', () => {
            const app = fixture.debugElement.componentInstance;
            const buttonsDisabled = app.buttonsDisabled;
            app.setComputersChoice();
            fixture.detectChanges();
            expect(buttonsDisabled).toBe(false);
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

        });

        describe('/ 4. Game - methods for calculating the winner', () => {



          it('should have a method "randomNumber()"', () => {
            const app = fixture.debugElement.componentInstance;
            expect(app.randomNumber).not.toBe(undefined);
          });

          it('should have a method "calculateWinner()"', () => {
            const app = fixture.debugElement.componentInstance;
            expect(app.calculateWinner).not.toBe(undefined);
          });

          it('"calculateWinner()" should do it right :-) ', () => {
            const winnerDisplayText = 'Du gewinnst!';
            const app = fixture.debugElement.componentInstance;
            app.calculateWinner(2, 1);
            expect(app.winnerDisplayText === winnerDisplayText).toBe(true);
          });

        });

      });

    });

    /**
     *  This test suite ist disabled!
     *  I makes testing slow.
     */
    xdescribe('/ Gamelogic - timing tests', () => {

        describe('/ Gamelogic timing tests - properties', () => {
          let app;

          beforeEach( () => {
            app = fixture.debugElement.componentInstance;
            jasmine.clock().install();
          });

          afterEach( () => {
            jasmine.clock().uninstall();
          });

          it('Before 0.8s the property "computerText" should be empty',  () => {
            app.countdown();
            jasmine.clock().tick(795);
            expect(app.computerText).toEqual('' || 'Computer wartet auf dich...');
            jasmine.clock().uninstall();
          });

          it('Before 2.5s the property "computerText" should NOT contain "Stein"',  () => {
            app.countdown();
            jasmine.clock().tick(2499);
            expect(app.computerText).not.toContain('Stein');
            jasmine.clock().uninstall();
          });

          it('Before 3.5s the property "computerText" should NOT contain "Papier"',  () => {
            app.countdown();
            jasmine.clock().tick(3499);
            expect(app.computerText).not.toContain('Papier');
            jasmine.clock().uninstall();
          });
        });

        describe('/ Gamelogic timing tests - methods', () => {
          let app;

          beforeEach( () => {
            app = fixture.debugElement.componentInstance;
            jasmine.clock().install();
          });

          afterEach( () => {
            jasmine.clock().uninstall();
          });

          it('After 0.8s the method countdown() should set property "computerText" to "Schere"',  () => {
            app.countdown();
            jasmine.clock().tick(800);
            expect(app.computerText).toContain('Schere');
            jasmine.clock().uninstall();
          });

          it('After 2.5s the method countdown() should set property "computerText" to "Stein"',  () => {
            app.countdown();
            jasmine.clock().tick(2500);
            expect(app.computerText).toContain('Stein');
          });

          it('After 3.5s the method countdown() should set property "computerText" to "Papier"',  () => {
            app.countdown();
            jasmine.clock().tick(3500);
            expect(app.computerText).toContain('Papier');
          });

          it('countdown() should have called "setComputersChoice()" after 4.5 sec.', () => {
            const spy = spyOn(component, 'setComputersChoice');
            app.countdown();
            expect(spy).not.toHaveBeenCalled();
            jasmine.clock().tick(4500);
            expect(spy).toHaveBeenCalled();
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

