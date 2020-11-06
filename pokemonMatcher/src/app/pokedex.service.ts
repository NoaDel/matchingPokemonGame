import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor() { }
}
