import { TestBed } from '@angular/core/testing';

import { FilmesAraujoService } from './filmes-araujo.service';

describe('FilmesAraujoService', () => {
  let service: FilmesAraujoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmesAraujoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
