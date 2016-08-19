import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {UserDetailComponent} from './app.user-detail.component';
import {LoginDetailComponent} from './login-detail.component';
@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent,
                  UserDetailComponent,
                  LoginDetailComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
