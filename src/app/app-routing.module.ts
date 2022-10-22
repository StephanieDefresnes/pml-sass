import { AuthGuard } from './helpers/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './security/login-page/login-page.component';
import { RegisterPageComponent } from './security/register-page/register-page.component';

import { AdminComponent } from './layout/main/admin/admin.component';
import { HomeComponent } from './layout/main/home/home.component';
import { ProfileComponent } from './layout/main/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
