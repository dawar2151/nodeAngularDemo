"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var signin_component_1 = require("./signin/signin.component");
var signup_component_1 = require("./signup/signup.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var signin_service_1 = require("./signin/signin.service");
var http_2 = require("@angular/common/http");
var signup_service_1 = require("./signup/signup.service");
var articles_service_1 = require("./articles/articles.service");
var articles_component_1 = require("./articles/articles.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_2.HttpClientModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            signin_component_1.SignInComponent,
            signup_component_1.SignUpComponent,
            articles_component_1.ArticlesComponent
        ],
        providers: [signin_service_1.SignInService, signup_service_1.SignUpService, articles_service_1.ArticleService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map