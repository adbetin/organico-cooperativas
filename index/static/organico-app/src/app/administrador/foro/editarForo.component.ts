import { Component,ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ForoService } from './foros.service';
import { ListadoCooperativaService } from '../../cooperativa/listadoCooperativa.service';
import { NgForm } from '@angular/forms';

@Component({
  //selector: 'app-crearCooperativa',
  templateUrl: 'editarForo.component.html',
  providers: [
    ForoService,
    ListadoCooperativaService
  ]
})

export class EditarForoComponent{
  title = 'Editar foro';
  envioFormForo = false;
  cooperativas: any[];
  temas: any[];
  foro: any = {
    cooperativa:"",
    tema: ""

  };

    constructor(private foroService: ForoService,
              private route: ActivatedRoute,
              private router: Router,
              private cd: ChangeDetectorRef,
              private cooperativaService: ListadoCooperativaService){

  }

  ngOnInit() {

    this.route.params
      .switchMap((params: Params) =>
        this.foroService.getForo(+params["id"])
      )
      .subscribe(response => {

          this.foro = response;
          this.cd.detectChanges();

        },
        reason => {
          this.foro = null;
          alert("error al cargar datos");
        });

    this.cooperativaService.getCooperativas()
      .subscribe(response => {
        this.cooperativas = response;
      });

    this.foroService.getTemas()
      .subscribe(response => {
        this.temas = response;
      });
  }

  editarForo( formForo : NgForm){
    this.envioFormForo = true;
    if (formForo.valid) {

      formForo.value.id = this.foro.id;

      let resultado = this.foroService.editarForo(formForo.value).subscribe();
      if( resultado ){
        alert("Datos guardados correctamente");
      }else{
        alert("Error almacenando datos");
      }
    }
  }

}
