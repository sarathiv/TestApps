import { Component } from '@angular/core';
import {ObjToArr} from './ObjToArr';
//import * as firebase from 'firebase';
@Component({
  selector: 'my-app',
  template:`<my-landing>header Loading </my-landing>
  `,
  pipes:[ObjToArr]
})
export class AppComponent {
title = "test t";
 }
