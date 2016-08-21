import { Injectable } from '@angular/core';
import { User } from './user';
import {FireBaseService} from './FireBase.Service';
@Injectable()
export class UserService {
private users: User[];
constructor(private fireservice: FireBaseService) {
     this.users = fireservice.ref("users");
 }
  //  getUsers(): User[] {

    //}
    //getUser():User {

    //}
}
