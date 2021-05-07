import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent} from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {VerificationComponent} from './verification/verification.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: UserComponent },
  { path: 'edit', component: UserEditComponent },
  { path: 'verify', component: VerificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
