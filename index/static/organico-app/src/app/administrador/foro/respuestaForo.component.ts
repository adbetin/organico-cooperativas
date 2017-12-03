import { Component, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ForoService } from './foros.service';
import { ListadoCooperativaService } from '../../cooperativa/listadoCooperativa.service';
import { NgForm } from '@angular/forms';

@Component({
  //selector: 'app-crearCooperativa',
  templateUrl: 'respuestaForo.component.html',
  providers: [
    ForoService,
    ListadoCooperativaService
  ]
})

export class RespuestaForoComponent{
  title = 'Respuesta foro';
  envioformRespuesta = false;
  cooperativas: any[];
  public respuestas: any[];
  temas: any[];
  foro: any = {
    cooperativa:'',
    tema: ''
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
        this.foroService.getForo(+params['id'])
      ).subscribe(response => {
          this.foro = response;
          this.cd.detectChanges();
        },
        reason => {
          this.foro = null;
          alert( 'error al cargar datos' );
        });

    this.route.params
      .switchMap((params: Params) =>
        this.foroService.getRespuestas(+params['id'])
      ).subscribe(response => {

          this.respuestas = response;
          this.cd.detectChanges();
        },
        reason => {
          this.foro = null;
          alert( 'error al cargar datos' );
        });
  }

  agregarRespuesta( formRespuesta: NgForm) {
    this.envioformRespuesta = true;
    if (formRespuesta.valid) {

      formRespuesta.value.id = this.foro.id;

      const resultado = this.foroService.agregarRespuesta(formRespuesta.value).subscribe();
      if ( resultado ) {
        alert( 'Respuesta agregada con exito' );
        this.ngOnInit();
      } else {
        alert( 'Error almacenando datos' );
      }
    }
  }

}
