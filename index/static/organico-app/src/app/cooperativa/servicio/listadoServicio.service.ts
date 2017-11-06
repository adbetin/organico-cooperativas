import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ListadoServicioService {
    constructor(private http: Http) {
    }

    getServicios(cooperativa_id: number): Observable<string[]> {
        return this.http.get('/cooperativa/servicioslist/' + cooperativa_id)
            .map(response => <string[]>response.json());

    }
}
