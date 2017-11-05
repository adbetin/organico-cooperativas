import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ListadoForosService } from './listadoForos.service';
import { ForoService } from './foros.service';

@Component({
  selector: 'app-listadocooperativa',
  templateUrl: 'listadoForos.component.html',
  providers: [
    ListadoForosService,
    ForoService
  ]
})

export class ListadoForosComponent implements OnInit {
  title = 'Listado foros';

  foros: any[] = new Array();
  cooperativas: any[] ;
  sizeDescripcion: number = 120;

  constructor(private listadoForosServices: ListadoForosService, private crearForoService : ForoService ){ }

  ngOnInit() {
    this.listadoForosServices.getForos()
          .subscribe(foros =>{
            this.foros = foros;
            console.log( this.foros )
          });
  }

}
