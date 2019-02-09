import { TestBed } from '@angular/core/testing';

import { TrelloServiceService } from './trello-service.service';

describe('TrelloServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrelloServiceService = TestBed.get(TrelloServiceService);
    expect(service).toBeTruthy();
  });
});
