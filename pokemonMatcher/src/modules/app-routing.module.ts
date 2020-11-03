import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from 'src/app/components/lobby/lobby.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { UserProfileComponent } from 'src/app/components/user-profile/user-profile.component';
import { LoginComponent } from "../app/components/login/login.component";

const routes: Routes = [
  {path:"", redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignUpComponent},
  {path:'lobby', component: LobbyComponent},
  {path:'profile', component: UserProfileComponent}
];
// :)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
