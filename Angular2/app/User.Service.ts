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

insertUser(user:User):void{
  alert("insert User");
  this.users.push(user);
  console.log("Insert User:"+JSON.stringify(user));
}

getUser(email):Promise<User> {
  let currentUser=null;
  //this.users.first((x, idx, obs)=>{
  //  console.log(JSON.stringify(x) + "index is :" +idx);
  //  });
 let promise = new Promise<User>((resolve,reject)=>{
    console.log("get user email:"+email);
    this.users.forEach((items)=>{
      items.forEach((item)=>{
        console.log("For each:"+JSON.stringify(item));
         if(item.email==email){
             currentUser=item;
             console.log("Match in:" + JSON.stringify(item));
         }
     });
     resolve(currentUser);
    });
  });
  return promise;
}

	updateUser(user:User):void {
    console.log("updateUser:" + JSON.stringify(user));
    //console.log("updateUser key:" + user.$key);
    let key = "";

    for (var x in user)
    {
      if(x == "$key")
      {
        key = user[x];
        delete user[x];
      }
      //if (user.hasOwnProperty(x)) delete user[x];
    }
    console.log("updateUser key:" + key);
    console.log("removed key:" + JSON.stringify(user));
		this.users.update(key,user);
	}
}
