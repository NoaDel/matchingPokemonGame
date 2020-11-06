import { Component, OnInit } from '@angular/core';
import { POKEMON } from '../../pokemon';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit {
  pokemon = POKEMON;
  constructor() { 

   }

  ngOnInit(): void {
  }
  
}
