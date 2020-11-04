import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;


  constructor(
    public firebaseAuth: AngularFireAuth,
    public  router:  Router
  ) { }

  googleLogin(){
    return new Promise((resolve, reject) =>{
      let provider = new auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email')
      this.firebaseAuth
      .signInWithPopup(provider)
      .then(res =>{
        resolve(this.router.navigate(['/lobby']))
      }, err =>{
        console.log(err);
        reject(err)
      })
    })
  }



  register(email, password){
    return new Promise<any>((resolve, reject) => {
      auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        resolve(this.router.navigate(['/login']));
      }, err => reject(err))

    })
  }

  login(email, password){
    return new Promise<any>((resolve, reject) => {
      auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        resolve(this.router.navigate(['lobby']));
      }, err => reject(err))
    })
  }

    logout(){
      this.firebaseAuth.signOut().then(() => this.router.navigate(['/login']))
    }





}

