/* tslint:disable:no-unused-variable */
import { async, tick, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';

import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayerComponent
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
   *  - PlayerComponent / Player - properties / buttons
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
  });

  describe('/ Player - view', () => {

    /**
     *  This test suite ist disabled!
     *  It has interferences with:
     *  - PlayerComponent / player - properties
     *
     *  One of both must be disabled for testing
     */
    xdescribe('/ h1 + h2 tags', () => {

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
      it('should be able to render a div with id buttons', () => {
        const compiled = fixture.debugElement.query(By.css('div#buttons'));
        expect(compiled).not.toBe(null);
      });

      it('should be able to render a button with id btn-rock', () => {
        const compiled = fixture.debugElement.query(By.css('#btn-rock'));
        // fixture.detectChanges();
        expect(compiled).not.toBe(null);
      });

      it('should be able to render a button with id btn-paper', async( () => {
        fixture.detectChanges();

        fixture.whenStable().then(() => {
        const compiled = fixture.debugElement.query(By.css('#btn-paper'));
          fixture.detectChanges();
          expect(compiled).not.toBe(null);
        });
      }));

      it('should be able to render a button with id btn-scissors', async( () => {
        fixture.detectChanges();

        fixture.whenStable().then(() => {
        const compiled = fixture.debugElement.query(By.css('#btn-scissors'));
          fixture.detectChanges();
          expect(compiled).not.toBe(null);
        });
      }));

    });

  });

  describe('/ Player - methods', () => {

    it('should have method "setPlayersChoice()"', () => {
      const app = fixture.debugElement.componentInstance;
      expect(app.setPlayersChoice).toBeDefined();
    });

  });
});
