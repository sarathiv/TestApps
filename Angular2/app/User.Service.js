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
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=User.Service.js.map