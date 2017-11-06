import { Component , ElementRef, NgZone, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { carritoService } from './carrito.service';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';


@Component({
  //selector: 'app-carrito',
  templateUrl: './carrito.html',
  providers: [
    carritoService
  ]
})
