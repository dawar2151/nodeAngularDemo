import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SignUpService} from "./signup.service";
import {User} from "../models/User";

@Component({
    selector: "login",
    templateUrl: 'signup.component.html'
})

export class SignUpComponent implements OnInit {
    model: User = new User();
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private signupService: SignUpService){ }

    ngOnInit() {

    }

    signup() {

        this.signupService.signup(this.model).then(data => {
            if(data){
                alert(data.message);
                this.router.navigateByUrl('/signin');
            }
        });
        this.loading = true;

    }
}
