import { Routes, RouterModule } from '@angular/router';

import { LandingComponent }      from './app.landing.component';
import {UserDetailComponent} from './app.user-detail.component';
import {RegisterDetailComponent} from './register-detail.component';
import {LoginDetailComponent} from './login-detail.component';
import {DashboardComponent} from './DashboardComponent';
const appRoutes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'register',
    component: RegisterDetailComponent
  },
  {
    path: 'user/:email',
    component: UserDetailComponent
  },
  {
    path: 'user',
    component: UserDetailComponent
  },
  {
    path: 'login',
    component: LoginDetailComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];
export const routing = RouterModule.forRoot(appRoutes);
