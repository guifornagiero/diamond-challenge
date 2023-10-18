import { TestBed } from '@angular/core/testing';

import { GetSummonerRankedService } from './get-summoner-ranked.service';

describe('GetSummonerRankedService', () => {
  let service: GetSummonerRankedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSummonerRankedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
