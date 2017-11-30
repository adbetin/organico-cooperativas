import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DiasRepartoService {
    constructor(private http: Http) { }

    guardarDiaReparto( diaReparto) {

      if ( !diaReparto['lunes'] ) {
        diaReparto['lunes'] = false;
      }
      if ( !diaReparto['martes'] ) {
        diaReparto['martes'] = false;
      }
      if ( !diaReparto['miercoles'] ) {
        diaReparto['miercoles'] = false;
      }
      if ( !diaReparto['jueves'] ) {
        diaReparto['jueves'] = false;
      }
      if ( !diaReparto['viernes'] ) {
        diaReparto['viernes'] = false;
      }
      if ( !diaReparto['sabado'] ) {
        diaReparto['sabado'] = false;
      }
      if ( !diaReparto['domingo'] ) {
        diaReparto['domingo'] = false;
      }

      const headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') });
      const options = new RequestOptions({ headers: headers });
      const body = JSON.stringify( diaReparto );
      console.log( 'body: ' );
      console.log( body );

      return this.http.post('/cooperativa/diasreparto/actualizar/', body, options).map(response => response.json());
    }

    getDiasReparto(cooperativa_id: any): Observable<string> {
        return this.http.get('/cooperativa/consultardiasreparto/' + cooperativa_id)
            .map(response => <string>response.json());
    }


    getCookie(name) {
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=');
      if (parts.length == 2) {
        return parts.pop().split(';').shift();
      }
    }

}
