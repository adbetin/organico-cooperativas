import { Component, OnInit, ViewEncapsulation , ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearServicioService } from './crearServicio.service';
import { ListadoCooperativaService } from '../listadoCooperativa.service';

@Component({
  selector: 'app-CrearServicio',
  templateUrl: './crearServicio.component.html',
  providers: [
    CrearServicioService,
    ListadoCooperativaService
  ]
})
export class CrearServicioComponent {
  title = 'Crear servicio';
  envioFormServicio = false;
  public searchElementRef: ElementRef;
  servicio: any = {
    "cooperativa": -1
  };
  cooperativas: any[];

  constructor(private crearServicioServices: CrearServicioService,
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

  guardarServicio(formServicio: NgForm) {
    this.envioFormServicio = true;
    if ( this.servicio.cooperativa && this.servicio.titulo && this.servicio.descripcion && this.servicio.foto ) {
        this.crearServicioServices.guardarServicio(this.servicio).subscribe(response => {
        alert("Su información fue agregada con éxito.");
        let cooperativa_id = this.servicio.cooperativa;
        this.servicio = {};
        this.router.navigateByUrl('cooperativa/servicio/listadoServicios/'+cooperativa_id);
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
              this.servicio.foto = canvas.toDataURL();
            }.bind(this);
            this.servicio.foto = e.target.result;
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
