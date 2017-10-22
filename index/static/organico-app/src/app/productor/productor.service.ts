import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductorService {
    constructor(private http: Http) {
    }

    setProductor(productor: any): Observable<string[]> {
        return this.http.post('/productor/service', productor)
            .map(response => <string[]>response.json());

    }

    editarProductor(productor: any , id: number): Observable<string[]> {
        return this.http.post('/productor/editarProductor/'+id, productor)
            .map(response => <string[]>response.json());

    }

    getProductor(): Observable<string[]> {
        return this.http.get('/productor/service')
            .map(response => <string[]>response.json());
        //console.log("texto");

    }

    getProd(id: number): Observable<string> {
        return this.http.get('/productor/get/' + id)
            .map(response => <string>response.json());

    }
}
