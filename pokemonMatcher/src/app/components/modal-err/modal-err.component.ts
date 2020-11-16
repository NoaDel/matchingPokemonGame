import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-err',
  templateUrl: './modal-err.component.html',
  styleUrls: ['./modal-err.component.scss']
})
export class ModalErrComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.auth.err);
  }

}
