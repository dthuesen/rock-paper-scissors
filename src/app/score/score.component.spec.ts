/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ScoreComponent } from './score.component';
import { MdCard } from '@angular/material';

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScoreComponent,
        MdCard
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('/ Score - properties', () => {

    it('should have a property scoreTitle Spielstand', () => {
      const app = fixture.debugElement.componentInstance;
      app.scoreTitle = '';
      expect(app.scoreTitle).not.toBe(undefined);
    });

    it('should have an Input "playerScore"', () => {
      const app = fixture.debugElement.componentInstance;
      app.playerScore = '';
      expect(app.playerScore).not.toBe(undefined);
    });

    it('should have an Input "computersScore"', () => {
      const app = fixture.debugElement.componentInstance;
      app.computersScore = '';
      expect(app.computersScore).not.toBe(undefined);
    });
  });

  describe('/ Score - view', () => {

    it('should render a h3 title', () => {
      const compiled = fixture.debugElement.query(By.css('h3'));
      expect(compiled).not.toBe(null);
    });

  });
});
