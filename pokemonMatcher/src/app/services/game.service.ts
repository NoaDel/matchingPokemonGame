import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../interfaces/cards';
import {map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: HttpClient
  ) { }


  getCardSets(): Observable<Cards>{

    return this.http.get<Cards>("https://api.pokemontcg.io/v1/sets")

  }

  getCardSetById(id:string): Observable<Cards>{
    return this.http.get<Cards>(`https://pokemontcg.io/cards?setCode=${id}`).pipe(map(data => data['data']));
  }

}
