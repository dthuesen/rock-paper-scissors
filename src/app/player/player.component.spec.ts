import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a property 'title'`, async( () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).not.toBe(undefined);
  }));

  it(`should have a property 'buttons'`, async( () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.buttons).not.toBe(undefined);
  }));

  describe('DOM elements', () => {

    it('should be able to render a h1 tag', async( () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('h1'));
      expect(compiled).not.toBe(null);
    }));

    it('h1 tag should not be empty', async( () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').innerText.length).not.toEqual(0);
    }));

    it('should be able to render a div with id buttons', async( () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('div#buttons'));
      expect(compiled).not.toBe(null);
    }));

    it('should be able to render a button with id btn-rock', async( () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('button#btn-rock'));
      expect(compiled).not.toBe(null);
    }));

    it('should be able to render a button with id btn-paper', async( () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('button#btn-paper'));
      expect(compiled).not.toBe(null);
    }));

    it('should be able to render a button with id btn-scissors', async( () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('button#btn-scissors'));
      expect(compiled).not.toBe(null);
    }));

  });

  describe('Component logic', () => {

    it(`should have an output 'choiceSet'`, () => {
      const app = fixture.debugElement.componentInstance;
      expect(app.choiceSet).not.toBe(undefined);
    });

    it(`should have method 'setPlayersChoice()'`, () => {
      const app = fixture.debugElement.componentInstance;
      expect(app.setPlayersChoice).not.toBe(undefined);
    });

  });
});
