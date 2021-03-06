import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ForoService {
    constructor(private http: Http) { }

    guardarForo( foro ) {

      const headers = new Headers ( { 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie("csrftoken") } );
      const options = new RequestOptions({ headers: headers });
      const body = JSON.stringify( foro );

      return this.http.post('guardarForo/', body, options).map(response => response.json());
    }

    editarForo( foro ) {

      const headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie("csrftoken" ) });
      const options = new RequestOptions({ headers: headers });
      const body = JSON.stringify( foro );
      return this.http.post('/administrador/editarDatosForo/', body, options).map(response => response.json());
    }

    agregarRespuesta( foro ) {
      const headers = new Headers({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') });
      const options = new RequestOptions({ headers: headers });
      const body = JSON.stringify( foro );
      return this.http.post('/administrador/agregarRespuesta/', body, options).map(response => response.json());
    }

    getTemas(): Observable<string[]> {
        return this.http.get('/administrador/temasForoList')
            .map(response => <string[]>response.json());

    }

    getCookie(name) {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if ( parts.length == 2 ) {
        return parts.pop().split(";").shift();
      }
    }

    getForo(id: number): Observable<string> {
        return this.http.get('/administrador/consultarForo/' + id)
            .map(response => <string>response.json());
    }

    getRespuestas(id: number): Observable<string[]> {
        return this.http.get('/administrador/consultarRespuestas/' + id)
            .map(response => <string[]>response.json());

    }

}
