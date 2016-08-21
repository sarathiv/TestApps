import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {UserDetailComponent} from './app.user-detail.component';
import {LoginDetailComponent} from './login-detail.component';
import {LandingComponent} from './app.landing.component';
import { routing }        from './app.routing';
@NgModule({
  imports:      [ BrowserModule ,
                  FormsModule,
                  routing],
  declarations: [ AppComponent,
                  LandingComponent,
                  UserDetailComponent,
                  LoginDetailComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
