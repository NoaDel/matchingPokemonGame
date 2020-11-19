import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
// import { POKEMON } from '../../pokemon';a
import { ActivatedRoute } from '@angular/router';
import {Cards} from '../../interfaces/cards'
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit {
cards: Observable<Cards>



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
    this.cards = this.gameService.getCardSetById(id)





    // this.ctx = this.canvas.nativeElement.getContext('2d');
    // this.ctx.fillStyle = 'black';
    // this.ctx.beginPath();
    // this.ctx.moveTo(587.5, 277.5);
    // this.ctx.lineTo(590, 277.5);
    // this.ctx.lineTo(590, 240);
    // this.ctx.lineTo(585, 240);
    // this.ctx.lineTo(585, 275);
    // this.ctx.lineTo(385, 275);
    // this.ctx.lineTo(385, 260);
    // this.ctx.lineTo(375, 260);
    // this.ctx.lineTo(375, 265);
    // this.ctx.lineTo(365, 265);
    // this.ctx.lineTo(365, 270);
    // this.ctx.lineTo(355, 270);
    // this.ctx.lineTo(355, 275);
    // this.ctx.lineTo(345, 275);
    // this.ctx.lineTo(345, 280);
    // this.ctx.lineTo(587.5, 280);
    // this.ctx.closePath();
    // this.ctx.fill();
    // this.ctx.beginPath();
    // this.ctx.moveTo(287.5, 177.5);
    // this.ctx.lineTo(290, 177.5);
    // this.ctx.lineTo(290, 140);
    // this.ctx.lineTo(285, 140);
    // this.ctx.lineTo(285, 175);
    // this.ctx.lineTo(85, 175);
    // this.ctx.lineTo(85, 160);
    // this.ctx.lineTo(75, 160);
    // this.ctx.lineTo(75, 165);
    // this.ctx.lineTo(65, 165);
    // this.ctx.lineTo(65, 170);
    // this.ctx.lineTo(55, 170);
    // this.ctx.lineTo(55, 175);
    // this.ctx.lineTo(45, 175);
    // this.ctx.lineTo(45, 180);
    // this.ctx.lineTo(287.5, 180);
    // this.ctx.font = "24px pokemon-font"
    // this.ctx.fillText("testing", 50, 50);
    // this.ctx.closePath();
    // this.ctx.fill();
    // var matcher = 0;

    // var cards = ['flower', 'wheat', 'tower', 'wheat', 'power', 'power', 'flower'];
    // var cardsDom = document.getElementsByClassName('cards') as HTMLUListElement;
    // cardsDom
    // var pair = [];

  }


  // animate(): void {}

// }
// export class Square {
//   constructor(private ctx: CanvasRenderingContext2D) {}

//   draw(x: number, y: number, z: number) {
//     this.ctx.fillRect(z * x, z * y, z, z);
//   }



}
