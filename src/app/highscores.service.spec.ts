import { TestBed, inject } from '@angular/core/testing';

import { HighscoresService } from './highscores.service';

describe('HighscoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighscoresService]
    });
  });

  it('should ...', inject([HighscoresService], (service: HighscoresService) => {
    expect(service).toBeTruthy();
  }));
});
