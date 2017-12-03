import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ListadoCooperativaService } from './listadoCooperativa.service';

@Component({
  selector: 'app-listadocooperativa',
  templateUrl: './listadoCooperativa.component.html',
  styleUrls: ['./listadoCooperativa.component.css'],
  providers: [
    ListadoCooperativaService
  ]
})

export class ListadoCooperativaComponent implements OnInit {
  title = 'Listado cooperativas';

  cooperativas: any[] = new Array();
  sizeDescripcion = 120;
  displayedColumns = ['nombre', 'nit', 'responsable', 'id'];
  dataSource: CooperativaDataSource = null;
  isLogged = false;

  constructor(private listadoCooperativaServices: ListadoCooperativaService) { }

  ngOnInit() {
    const userId: any = (<any>document.getElementById('userId'));
    if (userId && userId.value === '1') {
      this.isLogged = true;
    }

    this.listadoCooperativaServices.getCooperativas()
          .subscribe(cooperativas => {
            let grupoCooperativa: any[] = new Array();
            let contador = 0;
            let index = 0;
            for ( const cooperativa of cooperativas )
            {
              contador++;
              grupoCooperativa.push(cooperativa);

              if( contador == 3 || index == cooperativas.length-1 )
              {
                this.cooperativas.push(grupoCooperativa);
                grupoCooperativa = new Array();
                contador = 0;
              }
              index++;
            }
            /* this.cooperativas = cooperativas; */
            /*console.log(this.cooperativas );*/
            this.dataSource = new CooperativaDataSource(this.cooperativas);
          });
  }
}

export class CooperativaDataSource extends DataSource<any> {
  constructor(private data: any){
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(this.data);
  }

  disconnect() {}
}
