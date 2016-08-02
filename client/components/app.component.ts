import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {HttpService} from "./http.service";
import {Response} from "@angular/http";

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "app",
    templateUrl: "./client/components/app.component.html",
    styleUrls: ["./client/components/app.component.css"],
    providers: [HttpService]
})
export class AppComponent {

    backMessage;

    constructor(private _http: HttpService){

    }

    sendText(){
        console.log("Sending text message....");
        this._http.sendText()
            .subscribe((data) => {
                this.backMessage = data;
                console.log(this.backMessage);
            }, error => console.log(error));

    }

}
