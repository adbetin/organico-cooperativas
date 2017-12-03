import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class OfertasService {
    constructor(private http: Http) { }

    aceptarOferta( oferta ) {

      let headers = new Headers({ 'Content-Type': 'application/json','X-CSRFToken': this.getCookie('csrftoken') });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify( oferta );

      return this.http.post('/administrador/aceptarOferta/', body, options).map(response => response.json());
    }

    rechazarOferta( oferta ) {

      let headers = new Headers({ 'Content-Type': 'application/json','X-CSRFToken': this.getCookie('csrftoken') });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify( oferta );
      return this.http.post('/administrador/rechazarOferta/', body, options).map(response => response.json());
    }

    getOfertas(): Observable<string[]> {
        return this.http.get('/administrador/ofertasList') // Modificar con el view
            .map(response => <string[]>response.json());
    }

    getOferta(id: number): Observable<string> {
        return this.http.get('/administrador/consultarOferta/' + id)
            .map(response => <string>response.json());
    }

    getFechaSemana(): Observable<string[]> {
        return this.http.get('/administrador/fechasRest/')
            .map(response => <string[]>response.json());
    }

    getCookie(name) {
      let value = "; " + document.cookie;
      let parts = value.split("; " + name + "=");
      if (parts.length == 2)
        return parts.pop().split(";").shift();
    }




}
