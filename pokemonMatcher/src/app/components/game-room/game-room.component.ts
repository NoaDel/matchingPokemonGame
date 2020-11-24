import { Component, ViewChild, ElementRef, OnInit, Pipe } from '@angular/core';
// import { POKEMON } from '../../pokemon';a
import { ActivatedRoute } from '@angular/router';
import {Cards} from '../../interfaces/cards'
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';
import { $ } from 'protractor';
import { createReadStream } from 'fs';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit {
cards: Observable<Cards>
selecteds: number[] = [] ;



  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,

  ){

  }
  // @ViewChild('canvas', { static: true })
  // canvas: ElementRef<HTMLCanvasElement>;

  // private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('selecteds') );
    this.cards = this.gameService.getCardSetById(id);

    console.log(this.selecteds)
  }
  select(){
    console.log("test");
  }
  carding: any = document.querySelectorAll('.memory');
  clicked(event){
    event.target.parentNode.classList.toggle('flip');
    console.log(event.target.classList);
    console.log("test");
  }

hasFlippedCard: boolean = false;
lockBoard: boolean = false;
firstCard: any;
secondCard: any;

flipCard(event) {
  if (this.lockBoard) {
    return;
  }
  if (event.target.parentNode === this.firstCard) {
    return;
  }

  event.target.parentNode.classList.toggle('flip');


  if (!this.hasFlippedCard) {
    this.hasFlippedCard = true;
    this.firstCard = event.target.parentNode;

    return;
  }

  this.secondCard = event.target.parentNode;
  this.checkForMatch();
}

checkForMatch() {
  let isMatch = this.firstCard.parentNode.dataset.framework === this.secondCard.parentNode.dataset.framework;

  isMatch ? this.disableCards() : this.unflipCards();
}

disableCards() {
  // this.firstCard.removeEventListener('click', this.flipCard);
  // this.secondCard.removeEventListener('click', this.flipCard);

  this.resetBoard();
}

unflipCards() {
  this.lockBoard = true;

  setTimeout(() => {
    this.firstCard.parentNode.classList.remove('flip');
    this.secondCard.parentNode.classList.remove('flip');

    this.resetBoard();
  }, 15);
}

resetBoard() {
  [this.hasFlippedCard, this.lockBoard] = [false, false];
  [this.firstCard, this.secondCard] = [null, null];
}



}