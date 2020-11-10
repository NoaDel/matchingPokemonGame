import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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

  user: firebase.User;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.getUserState()
    .subscribe(user => {
      this.user = user;
    });
  }

}

