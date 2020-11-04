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

  register(email, password){
    this.firebaseAuth.register(email, password)
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
      this.error = err
      console.log(this.error)
      return false

    })
  }

}
