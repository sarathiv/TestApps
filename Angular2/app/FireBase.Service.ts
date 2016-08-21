import { Injectable,OnInit  } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class FireBaseService implements OnInit  {
  ngOnInit() {
  const  config = {
    apiKey: "AIzaSyAo9jAlohHV2JucGtgV7r7BB1CPquJIQhg",
    authDomain: "testapp-2493a.firebaseapp.com",
    databaseURL: "https://testapp-2493a.firebaseio.com",
    storageBucket: "testapp-2493a.appspot.com",
  };
      firebase.initializeApp(config);
  }

  ref(refto:string): any {
       return firebase.database().ref(refto);
    }

}
