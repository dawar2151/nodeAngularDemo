import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SignInService } from "./signin/signin.service";
import {HttpClientModule} from "@angular/common/http";
import {SignUpService} from "./signup/signup.service";
import {ArticleService} from "./articles/articles.service";
import {ArticlesComponent} from "./articles/articles.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ArticlesComponent
  ],
  providers:[SignInService, SignUpService, ArticleService]
    ,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
