import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class productos {
    constructor(private http: Http) { }




    getCookie(name) {
      let value = "; " + document.cookie;
      let parts = value.split("; " + name + "=");
      if (parts.length == 2)
        return parts.pop().split(";").shift();
    }

} 
