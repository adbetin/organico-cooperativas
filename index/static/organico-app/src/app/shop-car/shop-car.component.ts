import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import {ShopService} from "../shop/shop.service";
import {ProductorService} from "../productor/productor.service";
import { NgModel } from '@angular/forms';

@Component({
  selector: "app-shop-car",
  templateUrl: "./shop-car.component.html",
  styleUrls: ["./shop-car.component.css"],
  providers: [ShopService, ProductorService]
})
export class ShopCarComponent implements OnInit {
  proveedor: any = -1;
  tarjeta: any;
  telefono: any;
  direccion: any;
  usuario: any;

  private get cart() {
    return this.shopService.cart;
  }

  constructor(private shopService: ShopService,
              private cdr: ChangeDetectorRef,
              private productorService: ProductorService) {
  }

  ngOnInit() {
    let userId: any = (<any>document.getElementById('userId')).value;
    this.productorService.obtenerProductorPorUsuario(userId).subscribe(response => {
      this.usuario = response;
    });
  }

  removeItem(index) {
    this.shopService.removeItem(index);
    this.cdr.detectChanges();
  }

  updateQuantity(index: number) {
    this.shopService.updateItemQuantity(index, this.cart.data[index].quantity);
    this.cdr.detectChanges();
  }

  checkout() {
    if(this.proveedor != -1 && this.tarjeta && this.telefono && this.direccion) {
      let elemento: any = {};
      elemento.proveedorTarjeta = this.proveedor;
      elemento.tarjeta = this.tarjeta;
      elemento.direccionEntrega = this.direccion;
      elemento.telefonoContacto = this.telefono;
      let productos: any = [];
      elemento.usuario = this.usuario;
      let p: any = this.cart;
      for(let producto of p.data) {
        let prod = {
          id: producto.productId,
          cantidad: producto.quantity
        };
        productos.push(prod);
      }
      elemento.productos = productos;
      this.productorService.createOrder(elemento).subscribe(response => {
        alert(response);
        (<any>$).jStorage.set("cartObject", {
          totalItems: 0,
          totalMoney: 0,
          data: []
        });
        window.location.href = "/";
      }, error => {
        alert(error);
      })
    }else {
      alert("Alguno de los datos está incompleto, verifique e intente nuevamente.")
    }
  }

  validateCard() {
    let regex = new RegExp(/\d{4}\-\d{4}\-\d{4}\-\d{4}$/);
    return regex.test(this.tarjeta);
  }
}
