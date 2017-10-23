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

  cooperativas: any[];
  displayedColumns = ['nombre', 'nit', 'responsable', 'id'];
  dataSource: CooperativaDataSource = null;


  constructor(private listadoCooperativaServices: ListadoCooperativaService){ }

  ngOnInit() {
    this.listadoCooperativaServices.getCooperativas()
          .subscribe(cooperativas =>{
            this.cooperativas = cooperativas;
            /* console.log(this.cooperativas ); */
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
