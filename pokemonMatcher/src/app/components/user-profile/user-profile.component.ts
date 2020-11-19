import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AngularFirestore, AngularFirestoreDocument, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  playersWonAgainst: string;
  playersLostAgainst: string;
  user: User;
  public getUser: AngularFirestoreDocument<User>;

  fbuser: firebase.User;
  constructor(
    private auth: AuthService,
    private db: AngularFirestore,
    private router: Router
  ) {
  }
  ngOnInit(): void {

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
}

