/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerDisplayComponent } from './winner-display.component';
import { MdCard } from '@angular/material';

describe('WinnerDisplayComponent', () => {
  let component: WinnerDisplayComponent;
  let fixture: ComponentFixture<WinnerDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WinnerDisplayComponent,
        MdCard
        ]
    })
    .compileComponents();
  });

  beforeEach( async(() => {
    fixture = TestBed.createComponent(WinnerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('/ WinnerDisplay - properties', () => {

    it('should have a property winnerDisplayText', () => {
      const app = fixture.debugElement.componentInstance;
      expect(app.winnerDisplayText).toBeTruthy;
      expect(app.winnerDisplayText).not.toBe(undefined);
    });

  });

});
