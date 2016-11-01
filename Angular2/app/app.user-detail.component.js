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
var router_1 = require('@angular/router');
var user_1 = require('./user');
var User_Service_1 = require('./User.Service');
var angularfire2_1 = require('angularfire2');
var router_2 = require('@angular/router');
var UserDetailComponent = (function () {
    function UserDetailComponent(route, af, router, userservice) {
        this.route = route;
        this.af = af;
        this.router = router;
        this.userservice = userservice;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var email = params['email'];
            if (!email) {
                console.log("No email in parameter hence will get it from auth");
                if (_this.af.auth.getAuth()) {
                    email = _this.af.auth.getAuth().auth.email;
                }
                else {
                    console.log("Authentication is null.");
                }
            }
            if (!email) {
                console.log("email is null hence will forward to login.");
                var link = ['/login'];
                _this.router.navigate(link);
            }
            console.log("email in on app user detail nginit:" + email);
            //this.userservice.getUser(email)
            //	  .then(user => this.user = user);
            //alert(this.user);
            _this.userservice.getUser(email).then(function (dbUser) {
                console.log("user detail user:" + JSON.stringify(dbUser));
                _this.user = dbUser;
            });
            //this.user = new User();
            //this.user.email = email;
        });
        this.isLoggedIn = true;
        this.editEnabled = false;
    };
    UserDetailComponent.prototype.goBack = function () {
        console.log("Logging out..");
        this.af.auth.logout();
        console.log(" Done Logging out..");
        var link = ['/login'];
        this.router.navigate(link);
    };
    UserDetailComponent.prototype.flipEdit = function () {
        this.editEnabled = !this.editEnabled;
    };
    UserDetailComponent.prototype.save = function () {
        //this.userservice.getUser(this.user.email).then(dbUser=>{
        //   if(dbUser == null)
        //   {
        //     alert("this.user:" + JSON.stringify(this.user));
        //     alert("this.dbuser:" + JSON.stringify(dbUser));
        //     alert("USer from db is null");
        //     this.userservice.insertUser(this.user);
        //   }else
        //   {
        //     alert("USer update try!!!");
        //     alert("this.dbuser:" + JSON.stringify(dbUser));
        //     //this.userservice.updateUser(dbUser);
        //   }
        //});
        console.log("save:" + JSON.stringify(this.user));
        this.userservice.updateUser(this.user);
        console.log("after Update:" + JSON.stringify(this.user));
        this.editEnabled = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserDetailComponent.prototype, "user", void 0);
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-user-detail',
            templateUrl: 'app/user-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, angularfire2_1.AngularFire, router_2.Router, User_Service_1.UserService])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=app.user-detail.component.js.map