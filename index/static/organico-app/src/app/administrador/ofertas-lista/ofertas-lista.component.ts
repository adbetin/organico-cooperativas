import { Component, OnInit } from '@angular/core';
import { OfertasService } from './ofertas.service';

@Component({
  selector: 'app-ofertas-lista',
  templateUrl: './ofertas-lista.component.html',
  styleUrls: ['./ofertas-lista.component.css'],
  providers: [
    OfertasService
  ]
})


export class OfertasListaComponent implements OnInit {

  title = 'Lista de ofertas';
  ofertas: any[] = new Array();

  constructor( private ofertasServices: OfertasService ) { }

  ngOnInit() {
     this.ofertasServices.getOfertas()
          .subscribe(respuesta =>{
            this.ofertas = respuesta;
            console.log( this.ofertas )
          });
  }

}
