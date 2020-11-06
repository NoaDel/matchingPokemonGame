import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  public getUsers: AngularFirestoreCollection<User>
  users: User[] = []

  user: firebase.User
  constructor(
    private db: AngularFirestore,
    private auth: AuthService,
    private router: Router
  ) {
    this.getUsers = this.db.collection('Users')
    // this.user = this.db.doc(`users/${uid}`)
  }

  ngOnInit(): void {
    this.auth.getUserState()
    .subscribe(user => {
      this.user = user;
    })

    this.getUsersObservable().subscribe(users => {
      this.users = users

      console.log(users)
    });


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
              wins: item.payload.doc.data().wins,
              losses: item.payload.doc.data().losses,
              wonTo: item.payload.doc.data().wonTo,
              lostTo: item.payload.doc.data().lostTo
            };
          });
        }),

      );
  }



  handleLogout(){
    this.auth.logout()
  }
}
