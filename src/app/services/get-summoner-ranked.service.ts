import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RiotAPIConfiguration } from 'src/environments/environment';
import { SummonerRankedResponse } from '../types/summoner-ranked-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GetSummonerRankedService {
  private readonly apiKey: string = RiotAPIConfiguration.apiKey

  constructor(private httpClient: HttpClient) { }

  public getSummonerRankedData(summonerId: string): Observable<SummonerRankedResponse> {
    let url = this.generateSummonerRankedURL(summonerId)
    return this.httpClient.get<SummonerRankedResponse>(url)
  }

  private generateSummonerRankedURL(summonerId: string): string {
    return 'https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summonerId + '?api_key=' + this.apiKey
  }
}
