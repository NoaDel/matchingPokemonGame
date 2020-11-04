import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string

  constructor(
    public firebaseAuth: AuthService
  ) { }

  ngOnInit(): void {
  }


  onSignIn(email, password){
    this.firebaseAuth.login(email, password)
    .then(res => {

      console.log(res);
    }, err => {
      console.log(err);
      this.error = err
      console.log(this.error)
      return false
    })
  }

   handleGoogleLogin(){
     this.firebaseAuth.googleLogin()
  }



}
