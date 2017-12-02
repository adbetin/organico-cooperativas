import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ShopService } from '../shop/shop.service'

@Component({
  selector: 'app-shop-car',
  templateUrl: './shop-car.component.html',
  styleUrls: ['./shop-car.component.css'],
  providers: [ShopService]
})
export class ShopCarComponent implements OnInit {

  private get cart(){
    return this.shopService.cart;
  }

  constructor(private shopService: ShopService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  removeItem(index){
    this.shopService.removeItem(index);
    this.cdr.detectChanges();
  }

  updateQuantity(index: number){
    this.shopService.updateItemQuantity(index, this.cart.data[index].quantity);
    this.cdr.detectChanges();
  }

}
