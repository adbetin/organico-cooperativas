import { Component, OnInit } from '@angular/core';
import { ShopService, cartItem } from './shop.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ ShopService ]
})
export class ShopComponent implements OnInit {

  products: any[];
  loading: boolean = false;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.loading = true;
    this.shopService.getProducts(0)
      .subscribe(products => {
        this.products = products;
        this.loading = false;
      });
  }

  addCartItem(product){
    debugger;
    let cartitem: cartItem = {
      image: "",
      name: "",
      unitPrice: 2,
      quantity: 1,
      description: "",
      unit: ""
    }
    this.shopService.addCartItem(cartitem);
  }

}
