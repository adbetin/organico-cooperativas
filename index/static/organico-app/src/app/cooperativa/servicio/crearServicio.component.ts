import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-CrearServicio',
  templateUrl: './crearServicio.component.html',
  providers: [

  ]
})
export class CrearServicioComponent {
  title = 'Crear servicio';
  exitoso: boolean= false;

  constructor(private router: Router) { }

  ngOnInit() {}

  guardarServicio(formServicio: NgForm) {
    this.exitoso = true;
  }
}
