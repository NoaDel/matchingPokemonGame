import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
// import { POKEMON } from '../../pokemon';a
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import {Cards} from '../../interfaces/cards'
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators'
import { User } from '../../interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit {
cards: Observable<Cards>
selecteds: Array<User>
user: User;
fbuser: firebase.User;
public getUser: AngularFirestoreDocument<User>;





  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private router: Router,
    private auth: AuthService,
    private db: AngularFirestore,



  ){
  }
  // @ViewChild('canvas', { static: true })
  // canvas: ElementRef<HTMLCanvasElement>;

  // private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    if(window.history.state.selecteds){
      this.selecteds = window.history.state.selecteds
      console.log(this.selecteds)
    } else {
      this.router.navigateByUrl(`lobby`)
    }


    const id = this.route.snapshot.paramMap.get('id');
    const players = this.route.snapshot.paramMap.get('selecteds');
    this.cards = this.gameService.getCardSetById(id)


    this.auth.getUserState()
    .subscribe(fbuser => {
      this.fbuser = fbuser;
      this.getUser = this.db.doc<User>(`Users/${this.fbuser.uid}`);
      this.getUserObservable().subscribe(user => {
        this.user = user;
        console.log(user);
      });
      console.log(fbuser);
    });

  }

  getUserObservable(): Observable<User> {
    return this.getUser.valueChanges();
  }

  gamePlayed(userCredentials){
    this.user = userCredentials


    console.log(this.user)
    const userRef: AngularFirestoreDocument<User> = this.db.collection('Users').doc(userCredentials.uid);




    let gameWon = true

    if(gameWon == true){

      this.selecteds.forEach(player =>{
        userCredentials.wonTo.push(player.displayName)

        const playersRef: AngularFirestoreDocument<User> = this.db.collection('Users').doc(player.uid);
        // playersRef.get().subscribe(doc => {

        //   if (doc.exists){
        //     playersRef.update({
        //       uid: player.uid,
        //       email: player.email,
        //       displayName: player.displayName,
        //       totalBattle: player.totalBattle + 1,
        //       wins: player.wins + 1,
        //       losses: player.losses,
        //       wonTo: player.wonTo,
        //       lostTo: player.lostTo
        //     });
        //   }

        // });

      })

      userRef.get().subscribe(doc => {
        if (doc.exists){
          userRef.update({
            uid: userCredentials.uid,
            email: userCredentials.email,
            displayName: userCredentials.displayName,
            totalBattle: userCredentials.totalBattle + 1,
            wins: userCredentials.wins + 1,
            losses: userCredentials.losses,
            wonTo: userCredentials.wonTo,
            lostTo: userCredentials.lostTo
          });
        }

      });
    } else if(gameWon == false){
      this.selecteds.forEach(player => {
        userCredentials.lostTo.push(player.displayName)
      });
      userRef.get().subscribe(doc => {
        if (doc.exists){
          userRef.update({
            uid: userCredentials.uid,
            email: userCredentials.email,
            displayName: userCredentials.displayName,
            totalBattle: userCredentials.totalBattle + 1,
            wins: userCredentials.wins,
            losses: userCredentials.losses + 1,
            wonTo: userCredentials.wonTo,
            lostTo: userCredentials.lostTo
          });
        }
      });

    }
  }

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




  // animate(): void {}

// }
// export class Square {
//   constructor(private ctx: CanvasRenderingContext2D) {}

//   draw(x: number, y: number, z: number) {
//     this.ctx.fillRect(z * x, z * y, z, z);
//   }





}
