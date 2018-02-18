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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var articles_service_1 = require("./articles.service");
var ArticlesComponent = (function () {
    function ArticlesComponent(route, router, articleService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.articleService = articleService;
        this.loading = false;
        if (localStorage.getItem('token')) {
            this.articleService.get().then(function (data) {
                if (!data.message) {
                    _this.articles = data.response.docs;
                }
                _this.loading = true;
            });
        }
        else
            this.router.navigateByUrl('/signin');
    }
    ArticlesComponent.prototype.ngOnInit = function () {
    };
    return ArticlesComponent;
}());
ArticlesComponent = __decorate([
    core_1.Component({
        selector: "articles",
        templateUrl: 'articles.component.html',
        styleUrls: ['articles.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        articles_service_1.ArticleService])
], ArticlesComponent);
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articles.component.js.map