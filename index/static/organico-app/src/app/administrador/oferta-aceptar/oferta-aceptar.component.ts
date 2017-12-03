import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { OfertasService } from '../ofertas-lista/ofertas.service';
import { NgForm } from '@angular/forms';

@Component({
  //selector: 'app-oferta-aceptar',
  templateUrl: './oferta-aceptar.component.html',
  styleUrls: ['./oferta-aceptar.component.css'],
  providers: [
    OfertasService
  ]
})
export class OfertaAceptarComponent implements OnInit {

  title = 'Aceptar oferta';
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

  aceptarOferta( formOferta : NgForm){

      this.envioformOferta = true;

      console.log(formOferta)
      //console.log(formOferta.value)

      if (formOferta.valid && this.data.cantidad>=this.oferta.cantidad)  {
        if( confirm("Esta seguro de aceptar la propuesta actual ?")){

        formOferta.value.id = this.oferta.id;
        formOferta.value.fechaInicio = this.fechas.fechaInicioNext
        formOferta.value.fechaFin = this.fechas.fechaFinNext


        let resultado = this.ofertasServices.aceptarOferta(formOferta.value).subscribe();
        if( resultado ){
          alert("Oferta aprobada");
          //this.router.navigateByUrl('administrador/ofertas-lista');
        }else{
          alert("Error almacenando datos");
        }
      }
    }else{
      console.log("No ingresó valores");
    }


  }


}
