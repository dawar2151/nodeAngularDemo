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
export class   ArticleService {
    constructor(private http: HttpClient) { }

    get():Promise<any> {
        return this.http.get<any>(Config.urlServer+'/articles?token='+localStorage.getItem('token')).toPromise()
            .then(response => response)
            .catch(e => this.handleError(e));

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}
