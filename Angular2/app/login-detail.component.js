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
var error_1 = require('./error');
var angularfire2_1 = require('angularfire2');
var LoginDetailComponent = (function () {
    function LoginDetailComponent(router, af) {
        this.router = router;
        this.af = af;
        this.user = new user_1.User();
        this.user.state = "Karnataka";
        this.user.country = "India";
    }
    LoginDetailComponent.prototype.login = function (provider) {
        var _this = this;
        alert(JSON.stringify(this.user) + "provider is:" + provider);
        // Email and password
        if (provider == "email") {
            alert(provider);
            this.af.auth.login({ email: this.user.email, password: this.user.password }, { provider: angularfire2_1.AuthProviders.Password,
                method: angularfire2_1.AuthMethods.Password })
                .then(function (fireauthstate) {
                var link = ['/user', _this.user.email];
                console.log(JSON.stringify(fireauthstate));
                alert(link);
                _this.router.navigate(link);
            }, function (fireauthstate) {
                console.log("test " + JSON.stringify(fireauthstate));
                _this.error = new error_1.Error();
                _this.error.message = fireauthstate.message;
            })
                .catch(function (fireauthstate) {
                console.log(JSON.stringify(fireauthstate));
                _this.error = new error_1.Error();
                _this.error.message = fireauthstate.message;
            });
        }
        else if (provider == "google") {
            alert(provider);
            this.af.auth.login({ provider: angularfire2_1.AuthProviders.Google,
                method: angularfire2_1.AuthMethods.Popup })
                .then(function (fireauthstate) {
                _this.user.email = fireauthstate.auth.email;
                var link = ['/user', _this.user.email];
                console.log(JSON.stringify(fireauthstate));
                alert(link);
                _this.router.navigate(link);
            }, function (fireauthstate) {
                console.log("test " + JSON.stringify(fireauthstate));
                _this.error = new error_1.Error();
                _this.error.message = fireauthstate.message;
            })
                .catch(function (fireauthstate) {
                console.log(JSON.stringify(fireauthstate));
                _this.error = new error_1.Error();
                _this.error.message = JSON.stringify(fireauthstate);
            });
        }
        else if (provider == "github") {
            alert(provider);
            this.af.auth.login({ provider: angularfire2_1.AuthProviders.Github,
                method: angularfire2_1.AuthMethods.Popup })
                .then(function (fireauthstate) {
                _this.user.email = fireauthstate.auth.email;
                var link = ['/user', _this.user.email];
                console.log(JSON.stringify(fireauthstate));
                alert(link);
                _this.router.navigate(link);
            }, function (fireauthstate) {
                console.log("test " + JSON.stringify(fireauthstate));
                _this.error = new error_1.Error();
                _this.error.message = fireauthstate.message;
            })
                .catch(function (fireauthstate) { return console.log("Error " + JSON.stringify(fireauthstate)); });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], LoginDetailComponent.prototype, "user", void 0);
    LoginDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-login-detail',
            templateUrl: "./app/login-detail.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, angularfire2_1.AngularFire])
    ], LoginDetailComponent);
    return LoginDetailComponent;
}());
exports.LoginDetailComponent = LoginDetailComponent;
//# sourceMappingURL=login-detail.component.js.map