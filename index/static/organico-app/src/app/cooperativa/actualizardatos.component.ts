import { Component } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CrearCooperativaService } from './crearCooperativa.service';

@Component({
  //selector: 'app-crearCooperativa',
  templateUrl: './actualizardatos.component.html',
  providers: [
    CrearCooperativaService
  ]
})
export class CrearCooperativaComponent{
  title = 'Crear cooperativa';
  envioFormCooperativa = false;

  constructor(private crearCooperativaServices: CrearCooperativaService, private router: Router ){

  }

  guardarCooperativa( formCooperativa: NgForm ) {
    //console.log(formCooperativa.value);
    //console.log(formCooperativa.valid);
    this.envioFormCooperativa = true;
    if (formCooperativa.valid) {
      let resultado = this.crearCooperativaServices.guardarCooperativa(formCooperativa.value).subscribe();
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
