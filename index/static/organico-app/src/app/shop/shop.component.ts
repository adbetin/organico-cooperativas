import {Component, OnInit} from "@angular/core";
import {ShopService, cartItem} from "./shop.service";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.css"],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {

  products: any[];
  loading: boolean = false;

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.loading = true;
    this.shopService.getProducts(0)
      .subscribe(products => {
        this.products = products;
        this.loading = false;
      });
  }

  addCartItem(product: any) {
    let cartitem: cartItem = {
      productId: product.id,
      image: product.imagen,
      name: product.nombre,
      unitPrice: Number(product.precio),
      quantity: 1,
      description: product.descripcion,
      unit: product.unidadMedida
    };
    this.shopService.addCartItem(cartitem);
  }

}
