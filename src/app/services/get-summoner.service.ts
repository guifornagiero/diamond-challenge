import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SummonerResponse } from '../types/summoner-response.interface';
import { RiotAPIConfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetSummonerService {
  private readonly apiKey: string = RiotAPIConfiguration.apiKey
  private readonly summonerName: string = 'Cabeça de Lajota'
  private summonerUrl!: string

  constructor(private httpClient: HttpClient) {
    this.summonerUrl = this.generateSummonerURL()
  }

  public getSummonerData(): Observable<SummonerResponse> {
    return this.httpClient.get<SummonerResponse>(this.summonerUrl)
  }

  private generateSummonerURL(): string {
    return 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.summonerName + '?api_key=' + this.apiKey
  }
}
