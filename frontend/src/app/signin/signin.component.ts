import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SignInService} from "./signin.service";
import {User} from "../models/User";
import {ArticlesComponent} from "../articles/articles.component";

@Component({
    selector: "signin",
    templateUrl: 'signin.component.html'
})

export class SignInComponent implements OnInit {
    model: User = new User();
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private signInService: SignInService){ }

    ngOnInit() {

    }

    login() {

        this.signInService.login(this.model).then(data => {

            if(data.token){
                localStorage.setItem('token', data.token);
                this.router.navigateByUrl('/articles');
            }
            console.log(data);
        });
        this.loading = true;

    }
}
