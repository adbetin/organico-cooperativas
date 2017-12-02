import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductorService } from '../productor.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [
    ProductorService
  ],
  encapsulation: ViewEncapsulation.None
})
export class ProductosComponent implements OnInit {
  productor: any;
  productos: any;
  productoSeleccionado: any = {
    id: -1
  };
  mostrarFormularioProducto: any = false;
  producto: any = {
    stock: 0
  };
  cantidad: any;

  constructor(
    private productorService: ProductorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let userId = (<any>document.querySelector('#userId'));

    if (userId) {
      this.productorService.obtenerProductorPorUsuario(userId.value).subscribe(response => {
        this.productor = response;
      });

      this.productorService.obtenerListaProductos().subscribe(response => {
        this.productos = response;
      });
    } else {
      alert("Tiene que loguearse para poder ver esta página");
      window.location.href = "/";
    }

  }

  cambiarProducto() {
    let that = this;
    let producto = this.productos.filter(function (val) {
      return val.id == that.productoSeleccionado.id;
    })[0];
    if (producto) {
      this.productoSeleccionado.foto = producto.imagen;
    } else {
      this.productoSeleccionado.foto = "";
    }
  }

  loadFoto(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e: any) {
        let photo = new Image();
        photo.src = e.target.result;
        photo.onload = function () {
          let canvas: any = document.getElementById("photoPreview"),
            context = canvas.getContext("2d");
          context.drawImage(photo, 0, 0, 200, 200);
          this.producto.imagen = canvas.toDataURL();
        }.bind(this);
      }.bind(this);

      reader.readAsDataURL(input.files[0]);
    }
  }

  mostrarFormProducto() {
    this.mostrarFormularioProducto = true;
    this.producto = {
      unidadMedida: -1
    };
  }

  cargarProducto() {
    let oferta: any;
    (<any>document.querySelector(".preloader")).style.display = "block";
    if (this.mostrarFormularioProducto) {
      if (this.cantidad && this.productor.id && this.producto.nombre && this.producto.descripcion
        && this.producto.precio && this.producto.imagen && this.producto.unidadMedida) {
        oferta = {
          productor: this.productor,
          productos: this.producto,
          cantidad: this.cantidad
        };
      } else {
        let error = !this.productor ? "Hubo un problema consultando la información, ¿Está logueado como productor?\n" : "";
        error += !(this.producto.nombre && this.producto.descripcion
          && this.producto.precio && this.producto.imagen
          && this.producto.unidadMedida) ? "La información del producto está incompleta\n" : "";
        error += !this.cantidad ? "Tiene que ingresar una cantidad" : "";
        alert(error);
        (<any>document.querySelector(".preloader")).style.display = "none";
      }
    } else {
      let productoT = this.productos.filter((val) => {
        return parseInt(val.id) === parseInt(this.productoSeleccionado.id);
      })[0];
      if (this.productor.id && this.cantidad && productoT) {
        oferta = {
          productor: this.productor,
          productos: productoT,
          cantidad: this.cantidad
        };
      } else {
        let error = !this.productor ? "Hubo un problema consultando la información, ¿Está logueado como productor?\n" : "";
        error += !productoT ? "Aún no ha seleccionado ningún producto\n" : "";
        error += !this.cantidad ? "Tiene que ingresar una cantidad" : "";
        alert(error);
        (<any>document.querySelector(".preloader")).style.display = "none";
      }
    }
    if (oferta) {
      this.productorService.crearNuevaOferta(oferta).subscribe(response => {
        alert(response);
        (<any>document.querySelector(".preloader")).style.display = "none";
        this.producto = {};
        this.productoSeleccionado = { id: -1 };
        this.cantidad = "";
      }, error => {
        console.log(error);
        alert("Ocurrio un error guardando la oferta");
        (<any>document.querySelector(".preloader")).style.display = "none";
      });
    }
  }

}
