import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";

export interface cartItem{
  image: string
  name: string
  description?: string,
  unitPrice: number,
  quantity: number,
  unit: string,
  subtotal?: number
}

@Injectable()
export class ShopService {

  private cartObject: {
    totalItems: number,
    totalMoney: number,
    data: Array<cartItem>
  };

  private cartKey: string = "cartObject";

  constructor(private http: Http) {
    this.cartObject = <any>$.jStorage.get(this.cartKey);
  }

  addCartItem(item: cartItem){
    item.subtotal = item.quantity * item.unitPrice;
    this.cartObject.data.push(item);

    this.updateCartObject()
  }

  private updateCartObject(){
    this.cartObject.totalItems = 2;
    this.cartObject.totalMoney = 222;

    $.jStorage.set(this.cartKey, this.cartObject);
  }

  getProducts(page: number): Observable<string[]> {
        return this.http.get("/shop/api/getproducts")
            .map(response => <string[]>response.json());
  }
}
