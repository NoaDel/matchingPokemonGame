import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
newUser: any;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router:  Router
  ) {


  }

  getUserState(){
    return this.firebaseAuth.authState
  }


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



  register(user){
      this.firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredentials => {
        this.newUser = user
        console.log(userCredentials)
        userCredentials.user.updateProfile({
          displayName: user.username
        })
        this.insertUserData(userCredentials)
        .then(() =>{
          this.router.navigate(['/lobby']);

        })
    })
    .catch( error => {
      console.log(error)
    })
  }

  insertUserData(userCredentials: firebase.auth.UserCredential){
    return this.db.doc(`Users/${userCredentials.user.uid}`).set({
      email: this.newUser.email,
      username: this.newUser.username,
      password: this.newUser.password
    })
  }

  login(email, password){

      this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .catch(err =>{
        console.log(err)
      }).then(userCredentials =>{
        if(userCredentials) {
          this.router.navigate(['/lobby']);

        }
      })
  }

    logout(){
      this.firebaseAuth.signOut().then(() => this.router.navigate(['/login']))
    }





}

