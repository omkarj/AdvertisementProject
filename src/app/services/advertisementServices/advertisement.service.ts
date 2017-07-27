import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class AdvertisementService {
   
    authToken: any;
    url = 'http://192.168.3.144:9000/categories';
    constructor(private _http: Http) {
    }

    getCategories() {
        return this._http.get(this.url).
            map((response: Response) => response.json());
    }

   /* 
    postAd(jsonReq:Object) {
        let url = "http://192.168.3.144:9000/postAd";
        let headers = new Headers();
        headers.append('auth-token', '5976eb821c0edf75e32798e5');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, jsonReq, options)
            .map((response: Response) => response.json());

    }
    
    getAllAdvertisements() {
        let url = 'http://192.168.3.144:9000/posts';
        let headers = new Headers();
        headers.append('auth-token', '5976eb821c0edf75e32798e5');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url,options).
            map((response: Response) => response.json());
    }
    */
}

