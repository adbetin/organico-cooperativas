import {Component, OnInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CooperativaService} from './cooperativa.service';
import {ProductorListaComponent} from '../../productor/productor-lista/productor-lista.component';

@Component({
  selector: 'app-cooperativa-detalle',
  templateUrl: './cooperativa-detalle.component.html',
  styleUrls: ['./cooperativa-detalle.component.css'],
  providers: [
    CooperativaService,
    ProductorListaComponent
  ]
})
export class CooperativaDetalleComponent implements OnInit {

  cooperativa: any = null;

  constructor(private element: ElementRef,
              private route: ActivatedRoute,
              private router: Router,
              private cd: ChangeDetectorRef,
              private cooperativaServices: CooperativaService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) =>
        this.cooperativaServices.getCoop(+params["id"])
      )
      .subscribe(response => {
          this.cooperativa = response;
          this.cd.detectChanges();
        },
        reason => {
          this.cooperativa = null;
          alert("error al cargar datos");
        });
  }
}
