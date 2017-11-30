import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class ShopService {

  constructor(private http: Http) { }

  getProducts(page: number): Observable<string[]> {
    debugger;
        return this.http.get("/shop/api/getproducts")
            .map(response => <string[]>response.json());
  }
}
