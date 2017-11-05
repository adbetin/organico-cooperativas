import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-CrearServicio',
  templateUrl: './crearServicio.component.html',
  providers: [

  ]
})
export class CrearServicioComponent {
  title = 'Crear servicio';

  constructor(private router: Router) { }

  ngOnInit() {}
}
