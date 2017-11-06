import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/observable/of';
import { ListadoServicioService } from './listadoServicio.service';

@Component({
  selector: 'app-listadoservicio',
  templateUrl: './listadoServicio.component.html',
  styleUrls: ['./listadoServicio.component.css'],
  providers: [
    ListadoServicioService
  ]
})

export class ListadoServicioComponent implements OnInit {
  title = 'Listado servicios';

  servicios: any[] = new Array();
  sizeDescripcion: number = 120;
  dataSource: ServicioDataSource = null;


  constructor(private listadoServicioServices: ListadoServicioService,
              private route: ActivatedRoute,
              private router: Router
              ){ }

  ngOnInit() {
      this.route.params
       .switchMap((params: Params) =>
              this.listadoServicioServices.getServicios(+params["id"])
            ).subscribe(servicios =>{
            let grupoServicio: any[] = new Array();
            let contador: number = 0;
            let index: number = 0;
            for(let servicio of servicios)
            {
              contador++;
              grupoServicio.push(servicio);

              if( contador == 3 || index == servicios.length-1 )
              {
                this.servicios.push(grupoServicio);
                grupoServicio = new Array();
                contador = 0;
              }
              index++;
            }
            /* this.servicios = servicios; */
            /*console.log(this.servicios );*/
            this.dataSource = new ServicioDataSource(this.servicios);
          });
  }
}

export class ServicioDataSource extends DataSource<any> {
  constructor(private data: any){
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(this.data);
  }

  disconnect() {}
}
