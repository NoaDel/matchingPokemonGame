import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import {ModalErrComponent} from '../components/modal-err/modal-err.component'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
newUser: any;
err: ''

  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router:  Router,
    public dialog: MatDialog
  ) {


  }

  errorMessage(err) {
    this.dialog.open(ModalErrComponent, err);
    console.log(err)
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
    .catch( err =>{
      this.err = err
      this.errorMessage(this.err)
    })
  }

  insertUserData(userCredentials: firebase.auth.UserCredential){
    return this.db.doc(`Users/${userCredentials.user.uid}`).set({
      email: this.newUser.email,
      displayName: this.newUser.username,
      password: this.newUser.password
    })
  }

  login(email, password){

      this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .catch(err =>{
        this.err = err
        this.errorMessage(this.err)

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

