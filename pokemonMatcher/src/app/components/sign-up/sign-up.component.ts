import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
error: string

  constructor(
    private firebaseAuth: AuthService
  ) { }

  ngOnInit(): void {
  }

  register(frm){
    this.firebaseAuth.register(frm.value)
  }

}
