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
var RegisterDetailComponent = (function () {
    function RegisterDetailComponent(router) {
        this.router = router;
        this.user = new user_1.User();
        this.user.state = "Karnataka";
        this.user.country = "India";
    }
    RegisterDetailComponent.prototype.register = function () {
        alert(JSON.stringify(this.user));
        var link = ['/user', this.user.email];
        alert(link);
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], RegisterDetailComponent.prototype, "user", void 0);
    RegisterDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-register-detail',
            templateUrl: "./app/register-detail.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], RegisterDetailComponent);
    return RegisterDetailComponent;
}());
exports.RegisterDetailComponent = RegisterDetailComponent;
//# sourceMappingURL=register-detail.component.js.map