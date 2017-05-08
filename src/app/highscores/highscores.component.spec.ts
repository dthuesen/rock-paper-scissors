import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { HighscoresComponent } from './highscores.component';
import { MdCard, MdInputContainer, MdInputDirective } from '@angular/material';

describe('HighscoresComponent', () => {
  let component: HighscoresComponent;
  let fixture: ComponentFixture<HighscoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HighscoresComponent,
        MdInputDirective,
        MdCard,
        MdInputContainer,
      ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('/ Highscores view', () => {

    it('should render a <md-card> tag', () => {
      const compiled = fixture.debugElement.query(By.css('md-card'));
      expect(compiled).not.toBe(null);
    });

    it('should render a <form> tag with attribute name="form"', () => {
      const compiled = fixture.debugElement.query(By.css('form'));
      expect(compiled).not.toBe(null);
      expect(compiled.attributes['name']).toBe('form');
    });

    it('should render headline in a <h2> tag', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Meinen Score speichern');
    });

    it('should render <md-input-container> tag', () => {
      const compiled = fixture.debugElement.query(By.css('md-input-container'));
      expect(compiled).not.toBe(null);
    });

    it('should render a <input> tag with attribute name="name"', () => {
      const compiled = fixture.debugElement.query(By.css('input'));
      expect(compiled).not.toBe(null);
      expect(compiled.attributes['name']).toBe('name');
    });

    it('should render a <button> tag with id="save"', () => {
      const compiled = fixture.debugElement.query(By.css('#save'));
      expect(compiled).not.toBe(null);
    });

    it('should render a <button> tag with id="abort"', () => {
      const compiled = fixture.debugElement.query(By.css('#abort'));
      fixture.detectChanges();
      expect(compiled).not.toBe(null);
    });

  });

  describe('/ Highscores properties', () => {

    it('should have a property "playersData"', () => {
      const app = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      expect(app.playersData).not.toBe(undefined);
    });

    it('should have a property "savePlayerData"', () => {
      const app = fixture.debugElement.componentInstance;
      expect(app.savePlayerData).not.toBe(undefined);
    });

  });

  describe('/ Highscores methods', () => {

    it('should have a method savePlayer(data)', () => {
      const app = fixture.debugElement.componentInstance;
      expect(typeof component.savePlayer === 'function').toBe(true);
    });

    it('should have a method emitPlayerData()', () => {
      fixture.detectChanges();
      const app = fixture.debugElement.componentInstance;
      expect(app.emitPlayerData).not.toBe(undefined);
      expect(typeof component.emitPlayerData === 'function').toBe(true);
    });

  });

});
