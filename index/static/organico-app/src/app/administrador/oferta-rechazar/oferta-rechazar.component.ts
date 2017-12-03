import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { OfertasService } from '../ofertas-lista/ofertas.service';
import { NgForm } from '@angular/forms';

@Component({
  //selector: 'app-oferta-aceptar',
  templateUrl: './oferta-rechazar.component.html',
  styleUrls: ['./oferta-rechazar.component.css'],
  providers: [
    OfertasService
  ]
})
export class OfertaRechazarComponent implements OnInit {

  title = 'Rechazar oferta';
  envioformOferta = false;
  data: any = {};
  public oferta: any = {
    fecha :"",
    productor: {
      nombre:""
    },
    productos: {
      nombre:"",
      precio:""
    },
    cantidad:"0"
  };
  public fechas: any = {};

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

          this.oferta = response[0];
          this.data.cantidad = this.oferta.cantidad;
          this.cd.detectChanges();
        },
        reason => {
          //this.oferta = null;
          alert("error al cargar datos");
        });

    this.route.params
      .switchMap((params: Params) =>
        this.ofertasServices.getFechaSemana()
      ).subscribe(response => {
          this.fechas = response;
          this.cd.detectChanges();

        },
        reason => {
          this.fechas = null;
          alert("error al cargar datos");
        });
  }

  rechazarOferta( formOferta : NgForm){

      this.envioformOferta = true;

      if (formOferta.valid && this.data.cantidad>=this.oferta.cantidad)  {
        if( confirm("Esta seguro de rechazar la propuesta actual ?")){

        formOferta.value.id = this.oferta.id;
        let resultado = this.ofertasServices.rechazarOferta(formOferta.value).subscribe();
        if( resultado ){
          alert("Oferta rechazada");
          this.router.navigateByUrl('administrador/ofertas-lista');
        }else{
          alert("Error almacenando datos");
        }
      }
    }else{
      console.log("No ingresó valores");
    }


  }


}
