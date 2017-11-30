import {Component, OnInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CooperativaService} from './cooperativa.service';
import {ProductorListaComponent} from '../../productor/productor-lista/productor-lista.component';
import {ProductorService} from '../../productor/productor.service';

@Component({
  selector: 'app-cooperativa-detalle',
  templateUrl: './cooperativa-detalle.component.html',
  styleUrls: ['./cooperativa-detalle.component.css'],
  providers: [
    CooperativaService,
    ProductorListaComponent,
    ProductorService
  ]
})
export class CooperativaDetalleComponent implements OnInit {

  cooperativa: any = null;
  productores: any[] = new Array();
  marker = {
      latitud: 4.6486259,
      longitud: -74.2478963,
      zoom : 12
  }

  constructor(private element: ElementRef,
              private route: ActivatedRoute,
              private router: Router,
              private cd: ChangeDetectorRef,
              private cooperativaServices: CooperativaService,
              private productorService: ProductorService) {
  }

  ngOnInit() {
    let that = this;
    this.route.params
      .switchMap((params: Params) =>
        this.cooperativaServices.getCoop(+params["id"])
      )
      .subscribe(response => {
          this.cooperativa = response;
          this.cd.detectChanges();
          this.productorService.getSimpleProductor().subscribe(response => {
            that.productores = response.filter(function(val:any) {
              return val.cooperativa.id === that.cooperativa.id;
            });
          });
        },
        reason => {
          this.cooperativa = null;
          alert("error al cargar datos");
        });
  }
}
