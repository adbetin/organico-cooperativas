import {Component, OnInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductorService} from '../productor.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-productor-detalle',
  templateUrl: './productor-detalle.component.html',
  styleUrls: ['./productor-detalle.component.css'],
  providers: [
    ProductorService
  ]
})
export class ProductorDetalleComponent implements OnInit {

  private productor: any = null;

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
          this.cd.detectChanges();
        },
        reason => {
          this.productor = null;
          alert("error al cargar datos del productor");
        });
  }
}
