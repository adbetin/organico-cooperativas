import { Component, OnInit, ViewEncapsulation , ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearProductoService } from './crearproducto.service';
import { ListadoCooperativaService } from '../listadoCooperativa.service';

@Component({
  selector: 'app-CrearProducto',
  templateUrl: './crearproducto.component.html',
  providers: [
    CrearProductoService,
    ListadoCooperativaService
  ]
})
export class CrearProductoComponent {
  title = 'Crear Producto';
  envioFormProductos = false;
  public searchElementRef: ElementRef;
  exitoso:any = false;
  producto: any = {
    "cooperativa": -1
  };
  cooperativas: any[];

  constructor(private crearProductoServices: CrearProductoService,
              private cooperativaService: ListadoCooperativaService,
              private router: Router) {
  }

   ngOnInit()
   {
      this.cooperativaService.getCooperativas()
        .subscribe(response => {
          this.cooperativas = response;
        });

   }

  guardarProducto(formProducto: NgForm) {
    this.envioFormProductos = true;
    if ( this.producto.cooperativa && this.producto.nombre && this.producto.valor && this.producto.descripcion && this.producto.imagen ) {
        this.crearProductoServices.guardarProducto(this.producto).subscribe(response => {
        let cooperativa_id = this.producto.cooperativa;
        this.producto = {};
        this.router.navigateByUrl('cooperativa/Productos/listadoProductos/'+cooperativa_id);
        this.exitoso = true;
      });
    } else {
      alert("Alguno de los datos está incompleto.");
    }
  }

  loadFoto(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e:FileReaderEvent) {
          var photo = new Image();
            photo.src = e.target.result;
            photo.onload = function () {
              var canvas: any = document.getElementById('photoPreview'),
              context = canvas.getContext('2d');
              context.drawImage(photo,0,0,200,200);
              this.producto.foto = canvas.toDataURL();
            }.bind(this);
            this.producto.foto = e.target.result;
        }.bind(this);

        reader.readAsDataURL(input.files[0]);
    }
  }

}

interface FileReaderEventTarget extends EventTarget {
    result:string
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage():string; 
}
