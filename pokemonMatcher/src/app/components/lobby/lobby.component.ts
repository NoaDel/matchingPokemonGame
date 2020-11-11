import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { GameService } from '../../services/game.service'
import { Cards  } from '../../interfaces/cards'


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  public getUsers: AngularFirestoreCollection<User>
  users: User[] = []
  cards: Cards


  user: firebase.User
  constructor(
    private db: AngularFirestore,
    private auth: AuthService,
    private router: Router,
    private game: GameService,
  ) {
    this.getUsers = this.db.collection('Users')
    // this.user = this.db.doc(`users/${uid}`)
  }

  ngOnInit(): void {
    this.getSets()
    this.auth.getUserState()
    .subscribe(user => {
      this.user = user;

    })

    this.getUsersObservable().subscribe(users => {
      this.users = users

      console.log(users)
    });

}

  getSets(){
   this.game.getCardSets().subscribe(data =>{
     this.cards = data
     console.log(this.cards)

   })
  }



  getUsersObservable(): Observable<User[]> {
    return this.getUsers.snapshotChanges()
      .pipe(
        map((items: DocumentChangeAction<User>[]): User[] => {
          return items.map((item: DocumentChangeAction<User>): User => {
            return {
              uid: item.payload.doc.id,
              displayName: item.payload.doc.data().displayName,
              password: item.payload.doc.data().displayName,
              email: item.payload.doc.data().email,
              photoURL: item.payload.doc.data().photoURL,
              totalBattle: item.payload.doc.data().totalBattle,
              wins: item.payload.doc.data().wins,
              losses: item.payload.doc.data().losses,
              wonTo: item.payload.doc.data().wonTo,
              lostTo: item.payload.doc.data().lostTo
            };
          });
        }),

      );
  }


  //pokeballradio btn
  // options: string[] = ["option1", "option2", "option3", "option4"];
  // pokeball: any

  // selectRadio(){
  //   this.options.forEach(option => {
  //     document.getElementById(option).addEventListener("click", function() {
  //       const pokeballs = (document.getElementsByClassName("pokeball").value)
  //       for (var i = 0; i < pokeballs.length; i++) {
  //         pokeball = pokeballs[i];
  //         if (pokeball.parentNode.id != option) {
  //           pokeball.classList.remove("selected");
  //           pokeball.parentNode.classList.add("faded");
  //         } else {
  //           pokeball.classList.add("selected");
  //           pokeball.parentNode.classList.remove("faded");
  //         }
  //       }
  //     });
  //   });
  // }


}
