import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../modules/material.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from '../modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { GameRoomComponent } from './components/game-room/game-room.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
<<<<<<< HEAD
// import { HttpModule } from '@angular/http';
import { PokedexService } from './pokedex.service';
=======
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    LobbyComponent,
    GameRoomComponent,
    SignUpComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
<<<<<<< HEAD
  providers: [PokedexService],
=======
  providers: [AngularFirestore],
>>>>>>> master
  bootstrap: [AppComponent]
})
export class AppModule { }
