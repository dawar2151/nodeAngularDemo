import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import {ArticlesComponent} from "./articles/articles.component";

const appRoutes: Routes = [
    { path: 'signin', component: SignInComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: '',   redirectTo: '/signin', pathMatch: 'full' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
