import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { OfertasService } from '../ofertas-lista/ofertas.service';

@Component({
  selector: 'app-oferta-aceptar',
  templateUrl: './oferta-aceptar.component.html',
  styleUrls: ['./oferta-aceptar.component.css'],
  providers: [
    OfertasService
  ]
})
export class OfertaAceptarComponent implements OnInit {

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

  aceptarOferta( formOferta : NgForm){
    if( confirm("Esta seguro de aceptar la propuesta actual ?")){
      this.envioformOferta = true;
      if (formOferta.valid) {

        formOferta.value.id = this.oferta.id;

        let resultado = this.ofertasServices.aceptarOferta(formOferta.value).subscribe();
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
