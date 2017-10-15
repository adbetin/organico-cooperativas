import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CrearCooperativaService {
    constructor(private http: Http) { }

    guardarCooperativa( cooperativa ) {

      let headers = new Headers({ 'Content-Type': 'application/json','X-CSRFToken': this.getCookie('csrftoken') });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify( cooperativa );

      return this.http.post('guardarCooperativa/', body, options).map(response => response.json());
    }


    getCookie(name) {
      let value = "; " + document.cookie;
      let parts = value.split("; " + name + "=");
      if (parts.length == 2)
        return parts.pop().split(";").shift();
    }

}
