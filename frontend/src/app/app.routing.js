"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var signin_component_1 = require("./signin/signin.component");
var signup_component_1 = require("./signup/signup.component");
var articles_component_1 = require("./articles/articles.component");
var appRoutes = [
    { path: 'signin', component: signin_component_1.SignInComponent },
    { path: 'signup', component: signup_component_1.SignUpComponent },
    { path: 'articles', component: articles_component_1.ArticlesComponent },
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map