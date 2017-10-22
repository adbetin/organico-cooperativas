import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CooperativaService {
    constructor(private http: Http) {
    }

    getCoop(id: number): Observable<string> {
        return this.http.get('/cooperativa/consultarCooperativa/' + id)
            .map(response => <string>response.json());
    }
}
