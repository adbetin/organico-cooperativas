import {Component, OnInit, ElementRef, ChangeDetectorRef,  NgZone, ViewChild } from '@angular/core';
import {NgForm, FormControl } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ActualizarDatosService } from './ActualizarDatos.service';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  //selector: 'app-crearCooperativa',
  templateUrl: './actualizardatos.component.html',
  providers: [
    ActualizarDatosService
  ]
})
export class ActualizarDatosComponent{
  title = 'Actualizar cooperativa';
  envioFormCooperativa = false;
  cooperativa: any = null;

  marker: any = {};
  public searchControl: FormControl;
  @ViewChild("direccion")
  public searchElementRef: ElementRef;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cd: ChangeDetectorRef,
              private ActualizarDatosServices: ActualizarDatosService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {


    this.searchControl = new FormControl();

    this.marker = {
        latitud: 4.6486259,
        longitud: -74.2478963,
        zoom : 10
    }

  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) =>
        this.ActualizarDatosServices.getCoop(+params["id"])
      )
      .subscribe(response => {
          this.cooperativa = response;
          this.cd.detectChanges();

          //Cargar datos
          this.marker = {
              latitud: this.cooperativa.latitud,
              longitud: this.cooperativa.longitud,
              zoom : 10
          }

          this.setGeoLocalitation();
          this.setAutocomplete();

        },
        reason => {
          this.cooperativa = null;
          alert("error al cargar datos");
        });
  }

  setAutocomplete(){ //load Places Autocomplete
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

  actualizarCooperativa( formCooperativa: NgForm ) {

    formCooperativa.controls['latitud'].setValue(this.marker.latitud );
    formCooperativa.controls['longitud'].setValue(this.marker.longitud );

    this.envioFormCooperativa = true;
    if (formCooperativa.valid) {

      formCooperativa.value.id = this.cooperativa.id;
      let resultado = this.ActualizarDatosServices.guardarCooperativa(formCooperativa.value).subscribe(result => {
        if( resultado ){
          alert("Datos guardados correctamente");
          this.router.navigateByUrl('cooperativa/listadoCooperativa');
        }else{
          alert("Error almacenando datos");
        }
      });
    }else{
      //alert("Por favor llene todos los campos que son obligatorios y necesarios para la pagina. (*) ");
    }
  }

  mapClicked($event: any , formCooperativa: NgForm) {// Esta funcion fue modificada para cuando de clic cargue la direccion desde el mapa
    this.marker.latitud = $event.coords.lat;
    this.marker.longitud = $event.coords.lng;
    this.marker.zoom = 15;
    this.cooperativa.latitud = $event.coords.lat;
    this.cooperativa.longitud = $event.coords.lng;
    
    let geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(this.marker.latitud, this.marker.longitud);
    let request = { location: latlng };

    geocoder.geocode( request, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0] != null) {
          formCooperativa.controls['direccion'].setValue(results[0].formatted_address );
          formCooperativa.value.direccion = results[0].formatted_address ;
        } else {
          console.log( "No address available" )
        }
      }else
        console.log( "No esta disponible el geocoder" )
    });
  }

}
