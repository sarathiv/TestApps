"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
//import * as firebase from 'firebase';
var angularfire2_2 = require('angularfire2');
var UserService = (function () {
    function UserService(af, ref) {
        this.af = af;
        this.users = af.database.list('/users');
        this.reference = ref;
    }
    //  getUsers(): User[] {
    //}
    //getUser(email:string):Promise<User> {
    //alert("getUser "+email);
    //return FirebaseListObservable.first(this.users,(user=>user.email===email));
    //}
    UserService.prototype.addUser = function (user) {
        console.log(" Entered addUser");
        // Anonymous
        this.af.auth.login({
            provider: angularfire2_2.AuthProviders.Anonymous,
            method: angularfire2_2.AuthMethods.Anonymous,
        });
        var returnVal = false;
        this.af.auth.createUser({ email: user.email, password: user.password })
            .then(function (fireauthstate) { console.log(JSON.stringify(fireauthstate)); returnVal = true; }, function (fireauthstate) { return console.log(JSON.stringify(fireauthstate)); })
            .catch(function (fireauthstate) { return console.log(JSON.stringify(fireauthstate)); });
        this.users.push(user);
        console.log("Pushed user :" + JSON.stringify(user));
        //alert(JSON.stringify(this.users));
        //const queryList = this.af.database.ref().child("users").orderByChild("email").equalTo(user.email);
        //this.users.push(user);
        //alert(JSON.stringify(this.users));
        return returnVal;
    };
    UserService.prototype.insertUser = function (user) {
        console.log("In insert User");
        this.users.push(user);
        console.log("Inserted User:" + JSON.stringify(user));
    };
    UserService.prototype.getUser = function (email) {
        var _this = this;
        var currentUser = null;
        //this.users.first((x, idx, obs)=>{
        //  console.log(JSON.stringify(x) + "index is :" +idx);
        //  });
        var promise = new Promise(function (resolve, reject) {
            console.log("get user email:" + email);
            //this.users.forEach((items)=>{
            //  items.forEach((item)=>{
            //      console.log("For each:"+JSON.stringify(item));
            //       if(item.email==email){
            //           currentUser=item;
            //           console.log("Match in:" + JSON.stringify(item));
            //       }
            //   });
            //query:FirebaseObjectFactoryOpts;
            //const query = this.reference.child('/users').orderByChild('email').equalTo(email);
            var query = {
                query: {
                    orderByChild: "email",
                    equalTo: email,
                    limitToFirst: 1,
                }
            };
            console.log("Query:" + JSON.stringify(query));
            _this.af.database.list('/users', query).subscribe(function (user) {
                if (user && user.length == 1) {
                    if (user[0]) {
                        console.log("Resolving with:" + JSON.stringify(user[0]));
                        resolve(user[0]);
                    }
                }
            });
            //});
        });
        return promise;
    };
    UserService.prototype.updateUser = function (user) {
        console.log("updateUser:" + JSON.stringify(user));
        //console.log("updateUser key:" + user.$key);
        var key = "";
        for (var x in user) {
            if (x == "$key") {
                key = user[x];
                delete user[x];
            }
        }
        console.log("updateUser key:" + key);
        console.log("removed key:" + JSON.stringify(user));
        this.users.update(key, user);
        user['$key'] = key;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(angularfire2_1.FirebaseRef)), 
        __metadata('design:paramtypes', [angularfire2_2.AngularFire, Object])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=User.Service.js.map