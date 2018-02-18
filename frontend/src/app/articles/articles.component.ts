import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ArticleService} from "./articles.service";

@Component({
    selector: "articles",
    templateUrl: 'articles.component.html',
    styleUrls:['articles.component.css']
})

export class ArticlesComponent implements OnInit {
    articles: any[] ;
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private articleService: ArticleService){

        if(localStorage.getItem('token')) {

            this.articleService.get().then(data => {
                if (!data.message) {
                    this.articles = data.response.docs;
                }
                this.loading = true;
            });

        }else
            this.router.navigateByUrl('/signin');
    }

    ngOnInit() {


    }
}
