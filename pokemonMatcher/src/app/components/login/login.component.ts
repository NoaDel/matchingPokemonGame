import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;

  constructor(
    public firebaseAuth: AuthService
  ) { }

  ngOnInit(): void {
  }


  onSignIn(frm){
    this.firebaseAuth.login(frm.value.email, frm.value.password);
  }

   handleGoogleLogin(){
     this.firebaseAuth.googleLogin();
  }



}
