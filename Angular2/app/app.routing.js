"use strict";
var router_1 = require('@angular/router');
var app_landing_component_1 = require('./app.landing.component');
var app_user_detail_component_1 = require('./app.user-detail.component');
var register_detail_component_1 = require('./register-detail.component');
var login_detail_component_1 = require('./login-detail.component');
var DashboardComponent_1 = require('./DashboardComponent');
var appRoutes = [
    {
        path: 'landing',
        component: app_landing_component_1.LandingComponent
    },
    {
        path: 'register',
        component: register_detail_component_1.RegisterDetailComponent
    },
    {
        path: 'user/:email',
        component: app_user_detail_component_1.UserDetailComponent
    },
    {
        path: 'user',
        component: app_user_detail_component_1.UserDetailComponent
    },
    {
        path: 'login',
        component: login_detail_component_1.LoginDetailComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map