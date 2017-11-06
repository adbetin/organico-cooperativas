import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ActualizarDatosService {
    constructor(private http: Http) { }

    guardarCooperativa( cooperativa ) {

      let headers = new Headers({ 'Content-Type': 'application/json','X-CSRFToken': this.getCookie('csrftoken') });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify( cooperativa );
      return this.http.post("/cooperativa/actualizarCooperativa/", body, options).map(response => response.json());
    }


    getCookie(name) {
      let value = "; " + document.cookie;
      let parts = value.split("; " + name + "=");
      if (parts.length == 2)
        return parts.pop().split(";").shift();
    }

    getCoop(id: number): Observable<string> {
        return this.http.get('/cooperativa/consultarCooperativa/' + id)
            .map(response => <string>response.json());
    }


}
