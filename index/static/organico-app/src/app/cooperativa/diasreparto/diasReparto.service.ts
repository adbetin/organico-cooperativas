import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DiasRepartoService {
    constructor(private http: Http) { }

    guardarDiaReparto( diaReparto) {

      const headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') });
      const options = new RequestOptions({ headers: headers });
      const body = JSON.stringify( diaReparto );

      return this.http.post('actualizar/', body, options).map(response => response.json());
    }


    getCookie(name) {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length == 2) {
        return parts.pop().split(";").shift();
      }
    }

}
