import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ListadoForosService {
    constructor(private http: Http) {
    }

    getForos(): Observable<string[]> {
        return this.http.get('/administrador/forosList')
            .map(response => <string[]>response.json());

    }


}
