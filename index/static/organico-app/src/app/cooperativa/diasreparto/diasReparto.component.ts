import { Component, OnInit, ViewEncapsulation , ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DiasRepartoService } from './diasReparto.service';
import { ListadoCooperativaService } from '../listadoCooperativa.service';

@Component({
  selector: 'app-DiasReparto',
  templateUrl: './diasReparto.component.html',
  providers: [
    DiasRepartoService,
    ListadoCooperativaService
  ]
})
export class DiasRepartoComponent {
  title = 'Días reparto';
  public searchElementRef: ElementRef;
  exitoso:any = false;
  diaReparto: any = {
    "cooperativa": -1
  };
  cooperativas: any[];

  constructor(private diasRepartoService: DiasRepartoService,
              private cooperativaService: ListadoCooperativaService,
              private router: Router) {
  }

   ngOnInit()
   {
      this.cooperativaService.getCooperativas()
        .subscribe(response => {
          this.cooperativas = response;
        });

   }

  guardarDiaReparto(formDiaReparto: NgForm) {
      this.exitoso = false;
      const cooperativa_id = this.diaReparto.cooperativa;
      if (cooperativa_id > 0) {
          this.diasRepartoService.guardarDiaReparto(this.diaReparto).subscribe(response => {
            this.diaReparto = {};
            this.router.navigateByUrl('cooperativa/diasreparto/consultar');
            this.exitoso = true;
          });
      } else {
        alert( 'Debe seleccionar una cooperativa.' );
      }
  }

}
