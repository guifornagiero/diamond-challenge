import { TestBed } from '@angular/core/testing';

import { GetSummonerService } from './get-summoner.service';

describe('GetSummonerService', () => {
  let service: GetSummonerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSummonerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
