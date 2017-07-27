import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class UserServices {
    authToken: any;
    constructor(private _http: Http) {
    }
    
    register(jsonReq: Object) {
        let url = "http://192.168.3.144:9000/register";
        console.log(jsonReq);
        let resgister = this._http.post(url, jsonReq)
            .map((response: Response) => response.json())
            .subscribe((data) => {
                console.log(data);
            });
    }

    login(jsonReq: Object) {
        let url = "http://192.168.3.144:9000/login";
        console.log(jsonReq);
        return this._http.post(url, jsonReq)
            .map((response: Response) => response.json());
    }
}