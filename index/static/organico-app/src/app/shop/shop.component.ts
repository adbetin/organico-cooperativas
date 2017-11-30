import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: any[];
  loading: boolean = false;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    debugger;
    this.loading = true;
    this.shopService.getProducts(0)
      .subscribe(products => {
        debugger;
        this.products = products;
        this.loading = false;
      });
  }

}
