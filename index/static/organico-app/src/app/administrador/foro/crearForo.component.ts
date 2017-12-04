import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { ForoService } from './foros.service';
import { ListadoCooperativaService } from '../../cooperativa/listadoCooperativa.service';
import { NgForm } from '@angular/forms';
//import * as swal from 'sweetalert2';

@Component({
  //selector: 'app-crearCooperativa',
  templateUrl: 'crearForo.component.html',
  styleUrls: ['crearForo.component.css'],
  providers: [
    ForoService,
    ListadoCooperativaService
  ]
})

export class CrearForoComponent{
  title = 'Crear foro';
  envioFormForo = false;
  cooperativas: any[];
  temas: any[];

  foro : any = {
    "cooperativa": "",
    "tema" :""
  };

  constructor(private foroServices: ForoService,
              private router: Router ,
              private cooperativaService: ListadoCooperativaService,

  ){

  }

  ngOnInit() {
    this.cooperativaService.getCooperativas()
      .subscribe(response => {
        this.cooperativas = response;
      });

    this.foroServices.getTemas()
      .subscribe(response => {
        this.temas = response;
      });

    //this.openDialog();
  }

  saveForo( formForo : NgForm){
    this.envioFormForo = true;

    if (formForo.valid) {
      let resultado = this.foroServices.guardarForo(formForo.value).subscribe();
      if( resultado ){
        alert("Datos guardados correctamente");
        this.router.navigateByUrl('administrador/listaForo');
      }else{
        alert("Error almacenando datos");
      }
    }else{
      //alert("Por favor llene todos los campos que son obligatorios. (*) ");
    }


  }

}
