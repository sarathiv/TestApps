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
var core_1 = require('@angular/core');
//import {FireBaseService} from './FireBase.Service';
var angularfire2_1 = require('angularfire2');
var UserService = (function () {
    function UserService(af) {
        this.af = af;
        this.users = af.database.list('/users');
    }
    //  getUsers(): User[] {
    //}
    //getUser(email:string):Promise<User> {
    //alert("getUser "+email);
    //return FirebaseListObservable.first(this.users,(user=>user.email===email));
    //}
    UserService.prototype.addUser = function (user) {
        alert("addUser");
        // Anonymous
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Anonymous,
            method: angularfire2_1.AuthMethods.Anonymous,
        });
        var returnVal = false;
        this.af.auth.createUser({ email: user.email, password: user.password })
            .then(function (fireauthstate) { console.log(JSON.stringify(fireauthstate)); returnVal = true; }, function (fireauthstate) { return console.log(JSON.stringify(fireauthstate)); })
            .catch(function (fireauthstate) { return console.log(JSON.stringify(fireauthstate)); });
        this.users.push(user);
        alert(JSON.stringify(user));
        //alert(JSON.stringify(this.users));
        //const queryList = this.af.database.ref().child("users").orderByChild("email").equalTo(user.email);
        //this.users.push(user);
        //alert(JSON.stringify(this.users));
        return returnVal;
    };
    UserService.prototype.insertUser = function (user) {
        alert("insert User");
        this.users.push(user);
        console.log("Insert User:" + JSON.stringify(user));
    };
    UserService.prototype.getUser = function (email) {
        var _this = this;
        var currentUser = null;
        //this.users.first((x, idx, obs)=>{
        //  console.log(JSON.stringify(x) + "index is :" +idx);
        //  });
        var promise = new Promise(function (resolve, reject) {
            console.log("get user email:" + email);
            _this.users.forEach(function (items) {
                items.forEach(function (item) {
                    console.log("For each:" + JSON.stringify(item));
                    if (item.email == email) {
                        currentUser = item;
                        console.log("Match in:" + JSON.stringify(item));
                    }
                });
                resolve(currentUser);
            });
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
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=User.Service.js.map