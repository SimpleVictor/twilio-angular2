import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    sendText(){
        return this.http.get('/api').map((response:Response) => {
           return response.json();
        });
    }

}
