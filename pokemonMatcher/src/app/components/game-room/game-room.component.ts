import { Component, OnInit } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit {

  constructor() {
    PokemonTCG.Card.find('xy1')
  .then(card => {
    // do stuff with the card
  })
  .catch(error => {
    // do something with the error
  });

let params: PokemonTCG.IQuery[] = [{ name: 'name', value: 'Charizard' }];
PokemonTCG.Card.where(params)
  .then(cards => {
    // do stuff with the cards
  })
  .catch(error => {
    // do something with the error
  });

PokemonTCG.Card.all()
  .then(cards => {
    console.log();
  })
  .catch(error => {
    // do something with the error
  });
   }

  ngOnInit(): void {
  }

}
