import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductorService } from '../productor.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-activar-correo',
  templateUrl: './activar-correo.component.html',
  styleUrls: ['./activar-correo.component.css'],
  providers: [
    ProductorService
  ],
  encapsulation: ViewEncapsulation.None
})
export class ActivarCorreoComponent implements OnInit {
  correoActivo: any = false;
  constructor(public productorService: ProductorService) { }

  ngOnInit() {
    this.productorService.correoActivo().subscribe(response => {
      this.correoActivo = response;
    });
  }

  activarCorreo() {
    let body = {
      activar: this.correoActivo
    };
    this.productorService.activarCorreo(body).subscribe(response => {
      let mensaje = this.correoActivo ? "activado" : "desactivado";

      alert("El envio de correos fue " + mensaje + "correctamente.");
    });
  }

}
