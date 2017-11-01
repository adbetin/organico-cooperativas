import { Component, OnInit, ViewEncapsulation, ElementRef, NgZone, ViewChild  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductorService } from '../productor.service';
import { ListadoCooperativaService } from '../../cooperativa/listadoCooperativa.service';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css'],
  providers: [
    ProductorService,
    ListadoCooperativaService
  ],
  encapsulation: ViewEncapsulation.None,
})
export class RegistroAdminComponent implements OnInit {
  title: String = "Administración: Registrar Productor";
  marker: any = {};

  public searchControl: FormControl;
  @ViewChild("search")
  public searchElementRef: ElementRef;

  productor: any = {
    "tipo_documento": -1,
    "cooperativa": -1,
    "aprobado": "True"
  };
  cooperativas: any[];

  constructor(private productorService: ProductorService,
              private cooperativaService: ListadoCooperativaService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) { }

  ngOnInit() {
    this.cooperativaService.getCooperativas()
          .subscribe(response => {
            this.cooperativas = response;
          });

     //create search FormControl
    this.searchControl = new FormControl();
    this.setGeoLocalitation();
    this.setAutocomplete();

    if( !this.marker.latitud  ){ //Sino tiene posicion se asigna por defecto en bogota

      this.marker = {
        latitud: 4.6486259,
        longitud: -74.2478963,
        zoom : 5
      }
    }

  }

  saveProductor() {
    if(this.productor.nombre && this.productor.descripcion && this.productor.tipo_documento
        && this.productor.documento && this.productor.direccion && this.productor.cooperativa
        && this.productor.foto){
        this.productor.latitud = this.marker.latitud;
        this.productor.longitud = this.marker.longitud;
      this.productorService.setProductor(this.productor).subscribe(response => {
        alert("Su informaci?n fue agregada con ?xito.");
        this.productor = {};
      });
    }else{
      alert("Alguno de los datos está incompleto.");
    }
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

  loadFoto(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e:FileReaderEvent) {
            this.productor.foto = e.target.result;
        }.bind(this);

        reader.readAsDataURL(input.files[0]);
    }
  }

  mapClicked($event: any) {
    this.marker = {
      latitud: $event.coords.lat,
      longitud: $event.coords.lng
    };
  }

}

interface FileReaderEventTarget extends EventTarget {
    result:string
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage():string;
}
