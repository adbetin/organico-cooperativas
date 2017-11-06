import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CrearServicioService {
    constructor(private http: Http) { }

    guardarServicio( servicio) {

      let headers = new Headers({ 'Content-Type': 'application/json','X-CSRFToken': this.getCookie('csrftoken') });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify( servicio );

      return this.http.post('guardarServicio/', body, options).map(response => response.json());
    }


    getCookie(name) {
      let value = "; " + document.cookie;
      let parts = value.split("; " + name + "=");
      if (parts.length == 2)
        return parts.pop().split(";").shift();
    }

}
