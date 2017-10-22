import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ProductorService} from '../productor.service';

@Component({
  selector: 'app-productor-lista',
  templateUrl: './productor-lista.component.html',
  styleUrls: ['./productor-lista.component.css'],
  providers: [ ProductorService ]
})
export class ProductorListaComponent implements OnInit {

  productores: any[];
  displayedColumns = ['foto', 'nombre', 'documento', 'id'];
  dataSource : ProductorDataSource = null;

  constructor(private productorServices: ProductorService) {}

  ngOnInit() {
    this.productorServices.getProductor()
          .subscribe(productores =>{
            this.productores = productores;
            console.log(this.productores );
            this.productores = this.productores.filter(function(data){
              return data.aprobado === 'True';
            })
            this.dataSource = new ProductorDataSource(this.productores);
          });
  }

}

export class ProductorDataSource extends DataSource<any> {
  constructor(private data: any){
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(this.data);
  }

  disconnect() {}
}
