import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  constructor(
    private firebaseAuth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  handleLogout(){
    this.firebaseAuth.logout()
  }
}
