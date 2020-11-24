import { LobbyComponent } from 'src/app/components/lobby/lobby.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public lobbyErr: LobbyComponent,
  ) { }

  ngOnInit(): void {
    console.log(this.lobbyErr);
  }

}
