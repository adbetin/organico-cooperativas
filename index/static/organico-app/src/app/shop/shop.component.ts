import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service'

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

}
