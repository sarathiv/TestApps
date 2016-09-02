import { Injectable } from '@angular/core';
import { User } from './user';
//import {FireBaseService} from './FireBase.Service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable , AuthProviders, AuthMethods } from 'angularfire2';
@Injectable()
export class UserService {
users: FirebaseListObservable<any>;
constructor(private af: AngularFire) {
     this.users = af.database.list('/users');
 }
  //  getUsers(): User[] {

    //}
    //getUser(email:string):Promise<User> {
		//alert("getUser "+email);
		
		//return FirebaseListObservable.first(this.users,(user=>user.email===email));
    //}

	addUser(user:User):Boolean {
	   alert("addUser");
	   // Anonymous
	this.af.auth.login({
		provider: AuthProviders.Anonymous,
		method: AuthMethods.Anonymous,
		});
		var returnVal = false;
	   this.af.auth.createUser({ email: user.email, password: user.password })
					.then(
					fireauthstate=>{console.log(JSON.stringify(fireauthstate));returnVal =true;},
					fireauthstate=>console.log(JSON.stringify(fireauthstate)))
					.catch(fireauthstate=>console.log(JSON.stringify(fireauthstate)));
	   this.users.push(user);
	   alert(JSON.stringify(user));
	   //alert(JSON.stringify(this.users));
	//const queryList = this.af.database.ref().child("users").orderByChild("email").equalTo(user.email);
	//this.users.push(user);
	//alert(JSON.stringify(this.users));
					return returnVal;
	}
}
