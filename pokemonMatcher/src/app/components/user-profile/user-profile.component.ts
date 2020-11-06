import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

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
  constructor() {}


  ngOnInit(): void {
    // this.auth.getUserState()
    // .subscribe(user => {
    //   this.user = user;
    // })
  }

}

