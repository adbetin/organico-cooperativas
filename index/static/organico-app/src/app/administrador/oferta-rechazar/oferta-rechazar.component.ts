import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { OfertasService } from '../ofertas-lista/ofertas.service';

@Component({
  selector: 'app-rechazar-aceptar',
  templateUrl: './oferta-rechazar.component.html',
  styleUrls: ['./oferta-rechazar.component.css'],
  providers: [
    OfertasService
  ]
})
export class OfertaRechazarComponent implements OnInit {

  envioformOferta = false;
  oferta: any = {};

  constructor(private ofertasServices: OfertasService,
              private route: ActivatedRoute,
              private router: Router,
              private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {

    this.route.params
      .switchMap((params: Params) =>
        this.ofertasServices.getOferta(+params["id"])
      ).subscribe(response => {
          this.oferta = response;
          this.cd.detectChanges();
        },
        reason => {
          this.oferta = null;
          alert("error al cargar datos");
        });
  }

  rechazarOferta( formOferta : NgForm){
    this.envioformOferta = true;
    if( confirm("Esta seguro de rechazar la propuesta actual ?")){

      if (formOferta.valid) {

        formOferta.value.id = this.oferta.id;

        let resultado = this.ofertasServices.rechazarOferta(formOferta.value).subscribe();
        if( resultado ){
          alert("Oferta aprobada");
          this.ngOnInit();
        }else{
          alert("Error almacenando datos");
        }
      }
    }


  }


}
