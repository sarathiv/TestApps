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
var firebase = require('firebase');
var FireBaseService = (function () {
    function FireBaseService() {
    }
    FireBaseService.prototype.ngOnInit = function () {
        var config = {
            apiKey: "AIzaSyAo9jAlohHV2JucGtgV7r7BB1CPquJIQhg",
            authDomain: "testapp-2493a.firebaseapp.com",
            databaseURL: "https://testapp-2493a.firebaseio.com",
            storageBucket: "testapp-2493a.appspot.com",
        };
        firebase.initializeApp(config);
    };
    FireBaseService.prototype.ref = function (refto) {
        return firebase.database().ref(refto);
    };
    FireBaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FireBaseService);
    return FireBaseService;
}());
exports.FireBaseService = FireBaseService;
//# sourceMappingURL=FireBase.Service.js.map