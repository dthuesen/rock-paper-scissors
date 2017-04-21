import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ComputerComponent } from '../computer/computer.component';
import { GameComponent } from './game.component';
import { PlayerComponent } from '../player/player.component';
import { ScoreComponent } from '../score/score.component';
import { WinnerDisplayComponent } from '../winner-display/winner-display.component';

describe('Rock, Paper, Stone Game - GameComponent (container component)', () => {

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

  describe('Component parts', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(GameComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    xit('should create', () => {
      expect(component).toBeTruthy();
    });

    xdescribe('Game view', () => {

      it('should render title in a h1 tag', async( () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Schere, Stein, Papier');
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
    });

    xdescribe('Gamelogic', () => {

      beforeEach(function(done) {
        done();
      });
      
      it(`should have a property title 'Schere, Stein, Papier'`, async( () => {
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Schere, Stein, Papier');
      }));

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

      it(`should have an output 'computerText'`, async( () => {
        const app = fixture.debugElement.componentInstance;
        expect(app.computerText).not.toBe(undefined);
      }));

      it(`should have a method 'startGame'`, async( () => {
        const app = fixture.debugElement.componentInstance;
        expect(app.startGame).not.toBe(undefined);
      }));

      it(`should have a method 'displayStartHeadlines()'`, async( () => {
        const app = fixture.debugElement.componentInstance;
        expect(app.displayStartHeadlines).not.toBe(undefined);
      }));

      it(`should have a method 'setPlayersChoice()'`, async( () => {
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        expect(app.setPlayersChoice).not.toBe(undefined);
      }));

      it(`should have a method 'countdown()'`, async( () => {
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        expect(app.countdown).not.toBe(undefined);
      }));

      it(`should have a method 'newGame()'`, async( () => {
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        expect(app.newGame).not.toBe(undefined);
      }));

      it(`should have a method 'randomNumber()'`, async( () => {
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        expect(app.randomNumber).not.toBe(undefined);
      }));

    });

    xdescribe('Gamelogic - timing tests', () => {

        beforeEach(function(done) {
          done();
        });

        it(`After 0.8s the method countdown() should set property 'computerText' to 'Schere'`,  (done) => {
          fixture.detectChanges();
          const app = fixture.debugElement.componentInstance;
          app.countdown();
          setTimeout( () => {
            expect(app.computerText).toContain('Schere');
            done();
          }, 800);
        });

        it(`After 2.5s the method countdown() should set property 'computerText' to 'Stein'`,  (done) => {
          fixture.detectChanges();
          const app = fixture.debugElement.componentInstance;
          app.countdown();
          setTimeout( () => {
            expect(app.computerText).toContain('Stein');
            done();
          }, 2500);
        });

        it(`After 3.5s the method countdown() should set property 'computerText' to 'Papier'`,  (done) => {
          fixture.detectChanges();
          const app = fixture.debugElement.componentInstance;
          app.countdown();
          setTimeout( () => {
            expect(app.computerText).toContain('Papier');
            done();
          }, 3500);
        });

        it(`Before 0.8s the property 'computerText' should be empty`,  (done) => {
          fixture.detectChanges();
          const app = fixture.debugElement.componentInstance;
          app.countdown();
          setTimeout( () => {
            expect(app.computerText).toEqual('');
            done();
          }, 795);
        });

        it(`Before 2.5s the property 'computerText' should NOT contain 'Stein'`,  (done) => {
          fixture.detectChanges();
          const app = fixture.debugElement.componentInstance;
          console.log('app.computerText:' + '"' + app.computerText + '"');
          app.countdown();
          setTimeout( () => {
            expect(app.computerText).not.toContain('Stein');
            console.log('app.computerText:' + '"' + app.computerText + '"');
            done();
          }, 2499);
        });

        it(`Before 3.5s the property 'computerText' should NOT contain 'Papier'`,  (done) => {
          fixture.detectChanges();
          const app = fixture.debugElement.componentInstance;
          console.log('app.computerText:' + '"' + app.computerText + '"');
          app.countdown();
          setTimeout( () => {
            expect(app.computerText).not.toContain('Papier');
            console.log('app.computerText:' + '"' + app.computerText + '"');
            done();
          }, 3499);
        });

    });
  });


  xdescribe('Child components of GameComponent', () => {

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

