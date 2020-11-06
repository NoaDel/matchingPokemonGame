import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../modules/material.module'

import { AppRoutingModule } from '../modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { GameRoomComponent } from './components/game-room/game-room.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BadPageComponent } from './components/bad-page/bad-page.component';
import { ModalErrComponent } from './components/modal-err/modal-err.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    LobbyComponent,
    GameRoomComponent,
    SignUpComponent,
    BadPageComponent,
    ModalErrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
