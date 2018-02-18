import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Config } from '../config';
import { User } from '../models/User';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};

@Injectable()
export class SignUpService {
    constructor(private http: HttpClient) { }

    signup(user: User) :Promise<any> {

        return this.http.post<String>(Config.urlServer+'/signup', user, httpOptions).toPromise()
            .then(response => response)
            .catch(e => this.handleError(e));

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
            return Promise.reject(error.message || error);
    }


}
