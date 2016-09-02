import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {UserDetailComponent} from './app.user-detail.component';
import {LoginDetailComponent} from './login-detail.component';
import {LandingComponent} from './app.landing.component';
import { routing }        from './app.routing';
import * as firebase from 'firebase';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { UserService } from './User.Service';
import {FireBaseService} from './FireBase.Service';
const  firebaseConfig = {
    apiKey: "AIzaSyAo9jAlohHV2JucGtgV7r7BB1CPquJIQhg",
    authDomain: "testapp-2493a.firebaseapp.com",
    databaseURL: "https://testapp-2493a.firebaseio.com",
    storageBucket: "testapp-2493a.appspot.com",
  };

@NgModule({
  imports:      [ BrowserModule ,
                  FormsModule,
                  routing,
				  AngularFireModule.initializeApp(firebaseConfig)],
  declarations: [ AppComponent,
                  LandingComponent,
                  UserDetailComponent,
                  LoginDetailComponent
                ],
				providers: [
				    FireBaseService,
					UserService,
				],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
