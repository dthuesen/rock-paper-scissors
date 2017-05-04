/* tslint:disable:no-unused-variable */
import { async, tick, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, EventEmitter} from '@angular/core';
import { By } from '@angular/platform-browser';

import { PlayerComponent } from './player.component';
import { GameComponent } from '../game/game.component';
import { MdCard } from '@angular/material';

import { ComputerComponent } from '../computer/computer.component';
import { ScoreComponent } from '../score/score.component';
import { WinnerDisplayComponent } from '../winner-display/winner-display.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayerComponent,
        GameComponent,
        MdCard,
        ComputerComponent,
        ScoreComponent,
        WinnerDisplayComponent
        ]
    })
    .compileComponents();
  });

  beforeEach( async(() => {
    fixture = TestBed.createComponent(PlayerComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   *  This test suite ist disabled!
   *  It has interferences with:
   *  - PlayerComponent / player - view
   *  - PlayerComponent / Player - view / buttons
   *
   *  This or the others must be disabled for testing!
   */
  xdescribe('/ Player - properties', () => {
    it('should have a property "title"', () => {
      const app = fixture.debugElement.componentInstance;
      expect(app.title).not.toBe(undefined);
    });

    it('should have an output "choiceSet"', () => {
      const app = fixture.debugElement.componentInstance;
      expect(app.choiceSet).not.toBe(undefined);
    });

    it('should have an output "playerDisplayText"', () => {
      const app = fixture.debugElement.componentInstance;
      app.playerDisplayText = 'test';
      expect(app.playerDisplayText).not.toBe(undefined);
    });

    it('should have an output "buttonsDisabled"', () => {
      const app = fixture.debugElement.componentInstance;
      app.buttonsDisabled = true;
      expect(app.buttonsDisabled).not.toBe(undefined);
    });
  });

  /**
   *  This test suite is disabled because the containing sub suits
   *  have interferences with other tests suites.
   *  For further details see test suits inside.
   */
  xdescribe('/ Player - view', () => {

    /**
     *  This test suite ist disabled!
     *  It has interferences with:
     *  - PlayerComponent / player - properties
     *
     *  One of both must be disabled for testing
     */
    describe('/ h1 + h2 tags', () => {

      it('should be able to render a h1 tag', async( () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.query(By.css('h1'));

        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(compiled).not.toBe(null);
        });
      }));

      it('h1 tag should contain text "Player:"', async( () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(compiled.querySelector('h1').textContent).toContain('Player:');
        });
      }));

      it('should be able to render a h2 tag', () => {
        const compiled = fixture.debugElement.query(By.css('h2'));
        expect(compiled).not.toBe(null);
      });

      it('h2 tag should not be empty', async( () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        fixture.whenStable().then(() => {
          fixture.detectChanges();
          setTimeout(function() {
            expect(compiled.querySelector('h2').innerText.length).not.toEqual(0);
          }, 200);
        });
      }));
    });

    /**
     *  This test suite is disabled because it has
     *  interferences with tests suites:
     *
     *  - PlayerComponent / player - properties
     *  - GameComponent / Gamelogic - timing tests / Gamelogic timing tests - properties
     *
     *  This or the others must be disabled for testing!
     */
    xdescribe('/ buttons', () => {
      // The button specs have interferences with themselves!?!
      it('should be able to render a div with id buttons', () => {
        const compiled = fixture.debugElement.query(By.css('div#buttons'));
        expect(compiled).not.toBe(null);
      });
      // The button specs have interferences with themselves!?!
      it('should be able to render a button with id btn-rock', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.query(By.css('#btn-rock'));
        const app = fixture.debugElement.componentInstance;
        app.buttonsDisabled = false;
        fixture.detectChanges();
        expect(compiled).not.toBe(null);
      });
      // The button specs have interferences with themselves!?!
      it('should be able to render a button with id btn-paper', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.query(By.css('#btn-paper'));
        const app = fixture.debugElement.componentInstance;
        app.buttonsDisabled = false;
        fixture.detectChanges();
        expect(compiled).not.toBe(null);
      });
      // The button specs have interferences with themselves!?!
      it('should be able to render a button with id btn-scissors', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.query(By.css('#btn-scissors'));
        const app = fixture.debugElement.componentInstance;
        app.buttonsDisabled = false;
        fixture.detectChanges();
        expect(compiled).not.toBe(null);
      });


      /** vvv----  New Specs  vvv---___---===---___---===---___---===---___---===---___---===---___---=== */

      it('should be able to render a button with id btn-fountain', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.query(By.css('#btn-fountain'));
        const app = fixture.debugElement.componentInstance;
        app.buttonsDisabled = false;
        fixture.detectChanges();
        expect(compiled).not.toBe(null);
      });

      it('should be able to render a button with id btn-match', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.query(By.css('#btn-match'));
        const app = fixture.debugElement.componentInstance;
        app.buttonsDisabled = false;
        fixture.detectChanges();
        expect(compiled).not.toBe(null);
      });

      /*  ^^^----  New Specs  ^^^---___---===---___---===---___---===---___---===---___---===---___---=== */



      // The button specs have interferences with themselves!?!
      it('Button with id btn-rock should be disabled if set to disabled', () => {
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        app.buttonsDisabled = true;
        fixture.detectChanges();
        const compiled = fixture.debugElement.query(By.css('#btn-rock'));
        const disabled = compiled.properties.disabled;
        console.log('button: ', disabled);
        fixture.detectChanges();
        expect(disabled).toBe(true);
        app.buttonsDisabled = false;
        fixture.detectChanges();
      });
      // The button specs have interferences with themselves!?!
      it('Button with id btn-paper should be disabled if set to disabled', () => {
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        app.buttonsDisabled = true;
        fixture.detectChanges();
        const compiled = fixture.debugElement.query(By.css('#btn-paper'));
        const disabled = compiled.properties.disabled;
        console.log('button: ', disabled);
        fixture.detectChanges();
        expect(disabled).toBe(true);
        app.buttonsDisabled = false;
        fixture.detectChanges();
      });
      // The button specs have interferences with themselves!?!
      it('Button with id btn-scissors should be disabled if set to disabled', () => {
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        app.buttonsDisabled = true;
        fixture.detectChanges();
        const compiled = fixture.debugElement.query(By.css('#btn-scissors'));
        const disabled = compiled.properties.disabled;
        console.log('button: ', disabled);
        fixture.detectChanges();
        expect(disabled).toBe(true);
        app.buttonsDisabled = false;
        fixture.detectChanges();
      });

      /** vvv----  New Specs  vvv---___---===---___---===---___---===---___---===---___---===---___---=== */

      // The button specs have interferences with themselves!?!
      it('Button with id btn-match should be disabled if set to disabled', () => {
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        app.buttonsDisabled = true;
        fixture.detectChanges();
        const compiled = fixture.debugElement.query(By.css('#btn-macht'));
        const disabled = compiled.properties.disabled;
        console.log('button: ', disabled);
        fixture.detectChanges();
        expect(disabled).toBe(true);
        app.buttonsDisabled = false;
        fixture.detectChanges();
      });

      // The button specs have interferences with themselves!?!
      it('Button with id btn-fountain should be disabled if set to disabled', () => {
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        app.buttonsDisabled = true;
        fixture.detectChanges();
        const compiled = fixture.debugElement.query(By.css('#btn-fountain'));
        const disabled = compiled.properties.disabled;
        console.log('button: ', disabled);
        fixture.detectChanges();
        expect(disabled).toBe(true);
        app.buttonsDisabled = false;
        fixture.detectChanges();
      });

      /*  ^^^----  New Specs  ^^^---___---===---___---===---___---===---___---===---___---===---___---=== */

    });

  });

  describe('/ Player - methods', () => {
    let app;
    let parentApp;
    let fixtureParent;
    let parentComponent;

    beforeEach( () => {
      app = fixture.debugElement.componentInstance;
      fixtureParent = TestBed.createComponent(GameComponent);
      parentApp = fixtureParent.debugElement.componentInstance;
      parentComponent = fixtureParent.componentInstance;
    });

    afterEach( () => {
    });

    it('should have method "setPlayersChoice()"', () => {
      expect(app.setPlayersChoice).toBeDefined();
    });

    it('setPlayersChoice(rock) emit', () => {
      // const spy = spyOn(component, 'setPlayersChoice');
      const spy = spyOn(component.choiceSet, 'emit');
      app.setPlayersChoice('rock');
      expect(spy).toHaveBeenCalledWith('rock');
    });

    it('setPlayersChoice(paper) emit', () => {
      // const spy = spyOn(component, 'setPlayersChoice');
      const spy = spyOn(component.choiceSet, 'emit');
      app.setPlayersChoice('paper');
      expect(spy).toHaveBeenCalledWith('paper');
    });

    it('setPlayersChoice(scissors) emit', () => {
      // const spy = spyOn(component, 'setPlayersChoice');
      const spy = spyOn(component.choiceSet, 'emit');
      app.setPlayersChoice('scissors');
      expect(spy).toHaveBeenCalledWith('scissors');
    });

    /** vvv----  New Specs  vvv---___---===---___---===---___---===---___---===---___---===---___---=== */

    it('setPlayersChoice(fountain) emit', () => {
      const spy = spyOn(component.choiceSet, 'emit');
      app.setPlayersChoice('fountain');
      expect(spy).toHaveBeenCalledWith('fountain');
    });

    it('setPlayersChoice(match) emit', () => {
      const spy = spyOn(component.choiceSet, 'emit');
      app.setPlayersChoice('match');
      expect(spy).toHaveBeenCalledWith('match');
    });

    /*  ^^^----  New Specs  ^^^---___---===---___---===---___---===---___---===---___---===---___---=== */

  });
});
