import { Component, OnInit, ViewEncapsulation, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ProductorService } from '../productor.service';
import { ListadoCooperativaService } from '../../cooperativa/listadoCooperativa.service';
import { MapsAPILoader } from '@agm/core';

@Component({
  //selector: 'app-productor-registro',
  templateUrl: './productorEditar.component.html',
  styleUrls: ['./productorEditar.component.css'],
  providers: [
    ProductorService,
    ListadoCooperativaService
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ProductorEditarComponent implements OnInit {
  title: String = "Editar Productor";
  marker: any = {};

  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  productor: any = {
    "tipo_documento": -1,
    "cooperativa": -1
  };
  cooperativas: any[];

  constructor(private productorService: ProductorService,
              private cooperativaService: ListadoCooperativaService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit() {
    this.cooperativaService.getCooperativas()
          .subscribe(response => {
            this.cooperativas = response;
          });

    //create search FormControl
    this.searchControl = new FormControl();
    this.setGeoLocalitation();
    this.setAutocomplete();






    //Capturar informacion del productor a editar
    this.route.params
      .switchMap((params: Params) =>
        this.productorService.getProd(+params["id"])
      ).subscribe(response => {
            this.productor = response;
              this.marker = {
                latitud: this.productor.latitud,
                longitud: this.productor.longitud
              };
              console.log( this.marker)

          });

  }

  setAutocomplete(){

//load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.marker.latitud = place.geometry.location.lat();
          this.marker.longitud = place.geometry.location.lng();
          this.marker.zoom = 12;

        });
      });
    });
  }

  setGeoLocalitation(){
    if (window.navigator && window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(
              position => {
                  this.marker = {
                    latitud: position.coords.latitude,
                    longitud: position.coords.longitude
                  };
              },
              error => {
                  switch (error.code) {
                      case 1:
                          console.log('Permission Denied');
                          break;
                      case 2:
                          console.log('Position Unavailable');
                          break;
                      case 3:
                          console.log('Timeout');
                          break;
                  }
              }
          );
      };
  }

  setCooperativa( cooperativa ){
    this.productor.cooperativa = cooperativa
  }


  editarProductor() {

    //console.log(this.productor)

    if(this.productor.nombre && this.productor.descripcion && this.productor.tipo_documento
        && this.productor.documento && this.productor.direccion && this.productor.cooperativa
        && this.productor.foto){

      this.productor.latitud = this.marker.latitud;
      this.productor.longitud = this.marker.longitud;

    this.productor.id_cooperativa = this.productor.cooperativa.id;
      this.productor.id_tipo_documento = this.productor.tipo_documento.id;

      /*console.log(this.productor)
      return false*/

      this.route.params
      .switchMap((params: Params) =>
        this.productorService.editarProductor(this.productor, params["id"])
      ).subscribe(response => {
        alert("Productor actualizado!");
        this.productor = {};
        this.router.navigateByUrl('productor/lista');
      });
    }
  }

  loadFoto(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e:FileReaderEvent) {
            this.productor.foto = e.target.result;
        }.bind(this);

        reader.readAsDataURL(input.files[0]);
    }
  }

  mapClicked($event: any) {// Esta funcion fue modificada para cuando de clic cargue la direccion desde el mapa
    this.marker.latitud = $event.coords.lat;
    this.marker.longitud = $event.coords.lng;
    this.marker.zoom = 15;

    let geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(this.marker.latitud, this.marker.longitud);
    let request = { latLng: latlng };

    geocoder.geocode(request, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0] != null) {
         //let city = results[0].address_components[results[0].address_components.length-4].short_name;
          this.productor.direccion= results[0].formatted_address ;
          //console.log( results[0].formatted_address )
         //this.shareService.setLocationDetails(city);
        } else {
          //alert("No address available");
          console.log( "No address available" )
        }
      }else
        console.log( "No esta disponible el geocoder" )
    });
  }

}

interface FileReaderEventTarget extends EventTarget {
    result:string
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage():string;
}
