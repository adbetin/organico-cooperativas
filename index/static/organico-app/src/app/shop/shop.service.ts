import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";

export interface cartItem{
  productId: number,
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
    this.cartObject = <any>$.jStorage.get(this.cartKey, {
      totalItems: 0,
      totalMoney: 0,
      data: []
    });
  }

  addCartItem(item: cartItem){
    let existIndex: number = -1;
    for(var i = 0; i < this.cartObject.data.length; i++){
			if(item.productId === this.cartObject.data[i].productId){
			  existIndex = i;
			  break
      }
		}

		if(existIndex != -1){
      //si existe se actualiza el objeto
      this.cartObject.data[existIndex].quantity += item.quantity;
      this.cartObject.data[existIndex].subtotal = this.cartObject.data[existIndex].quantity * this.cartObject.data[existIndex].unitPrice;
    }else{
      //si no existe se agrega el objeto
      item.subtotal = item.quantity * item.unitPrice;
      this.cartObject.data.push(item);
    }

    this.updateCartObject()
  }

  private updateCartObject(){
    this.cartObject.totalItems = 0;
    this.cartObject.totalMoney = 0;

		for(var i = 0; i < this.cartObject.data.length; i++){
			this.cartObject.totalItems += this.cartObject.data[i].quantity;
      this.cartObject.totalMoney += this.cartObject.data[i].subtotal;
		}

    $.jStorage.set(this.cartKey, this.cartObject);
  }

  public clearCart(){
    this.cartObject = {
      totalMoney: 0,
      totalItems: 0,
      data: []
    }
  }

  getProducts(page: number): Observable<string[]> {
        return this.http.get("/shop/api/getproducts")
            .map(response => <string[]>response.json());
  }
}
