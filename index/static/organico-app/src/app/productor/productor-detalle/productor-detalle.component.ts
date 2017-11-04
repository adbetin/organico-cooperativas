import {Component, OnInit, ElementRef, ChangeDetectorRef, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductorService} from '../productor.service';
import { NgModel } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-productor-detalle',
  templateUrl: './productor-detalle.component.html',
  styleUrls: ['./productor-detalle.component.css'],
  providers: [
    ProductorService
  ],
  encapsulation: ViewEncapsulation.None
})
export class ProductorDetalleComponent implements OnInit {

  private productor: any = null;

  correoActivo: any = false;

  styles: any = [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#272727"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#f7f7f7"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -20
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        },
        {
          "color": "#f5b062"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#5ec79c"
        },
        {
          "visibility": "on"
        }
      ]
    }
  ];

  email: any = {
    sender: '',
    message: '',
    receiver: '',
    activo: false
  }

  constructor(private element: ElementRef,
              private route: ActivatedRoute,
              private router: Router,
              private cd: ChangeDetectorRef,
              private productorServices: ProductorService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) =>
        this.productorServices.getProd(+params["id"])
      )
      .subscribe(response => {
          this.productor = response;
          console.log(this.productor);
          this.email.receiver = this.productor.email;
          this.cd.detectChanges();
        },
        reason => {
          this.productor = null;
          alert("error al cargar datos del productor");
        });

    this.productorServices.correoActivo().subscribe(response => {
      this.correoActivo = response;
    });
  }

  mostrarFormularioCorreo() {
    console.log("Hola mundo");
    this.email.activo = true;
  }

  enviarCorreo(){
    if(this.email.sender && this.email.message && this.email.receiver) {
      this.productorServices.enviarCorreo(this.email).subscribe(response => {
        alert(response);
        this.email = {
          sender: '',
          message: '',
          receiver: this.productor.email,
          activo: false
        }
      },

      reason => {
        console.log(reason);
      });
    }else {
      alert("Todos los campos son obligatorios");
    }
  }
}
