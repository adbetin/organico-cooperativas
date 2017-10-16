import {Component, OnInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ActualizarDatosService } from './ActualizarDatos.service';

@Component({
  //selector: 'app-crearCooperativa',
  templateUrl: './actualizardatos.component.html',
  providers: [
    ActualizarDatosService
  ]
})
export class ActualizarDatosComponent{
  title = 'Actualizar cooperativa';
  envioFormCooperativa = false;
  cooperativa: any = null;

  constructor(private element: ElementRef,
              private route: ActivatedRoute,
              private router: Router,
              private cd: ChangeDetectorRef,
              private ActualizarDatosServices: ActualizarDatosService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) =>
        this.ActualizarDatosServices.getCoop(+params["id"])
      )
      .subscribe(response => {
          this.cooperativa = response;
          this.cd.detectChanges();
        },
        reason => {
          this.cooperativa = null;
          alert("error al cargar datos");
        });
  }

  guardarCooperativa( formCooperativa: NgForm ) {
    //console.log(formCooperativa.value);
    //console.log(formCooperativa.valid);
    this.envioFormCooperativa = true;
    if (formCooperativa.valid) {
      let resultado = this.ActualizarDatosServices.guardarCooperativa(formCooperativa.value).subscribe();
      if( resultado ){
        alert("Datos guardados correctamente");
        this.router.navigateByUrl('cooperativa/listadoCooperativa');
      }else{
        alert("Error almacenando datos");
      }
    }else{
      //alert("Por favor llene todos los campos que son obligatorios y necesarios para la pagina. (*) ");
    }
  }

}
