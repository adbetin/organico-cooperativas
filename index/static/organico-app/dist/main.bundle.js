webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required] {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid {\n  border-left: 5px solid #a94442 !important; /* red */\n  border-color:  #a94442 !important; /* red */\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(169,68,66,.6) !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <!--<h1>\n    Cooperativas {{title}}!\n  </h1>-->\n    <!--<app-cooperativa ></app-cooperativa>\n    <app-crearCooperativa></app-crearCooperativa>-->\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_lazyload_image__ = __webpack_require__("../../../../ng-lazyload-image/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cooperativa_listadoCooperativa_component__ = __webpack_require__("../../../../../src/app/cooperativa/listadoCooperativa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cooperativa_crearCooperativa_component__ = __webpack_require__("../../../../../src/app/cooperativa/crearCooperativa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cooperativa_cooperativa_detalle_cooperativa_detalle_component__ = __webpack_require__("../../../../../src/app/cooperativa/cooperativa-detalle/cooperativa-detalle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__productor_productorRegistro_component__ = __webpack_require__("../../../../../src/app/productor/productorRegistro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__productor_productor_detalle_productor_detalle_component__ = __webpack_require__("../../../../../src/app/productor/productor-detalle/productor-detalle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__productor_productor_lista_productor_lista_component__ = __webpack_require__("../../../../../src/app/productor/productor-lista/productor-lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cooperativa_actualizardatos_component__ = __webpack_require__("../../../../../src/app/cooperativa/actualizardatos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__productor_registro_admin_registro_admin_component__ = __webpack_require__("../../../../../src/app/productor/registro-admin/registro-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__productor_productor_editar_productorEditar_component__ = __webpack_require__("../../../../../src/app/productor/productor-editar/productorEditar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__productor_activar_correo_activar_correo_component__ = __webpack_require__("../../../../../src/app/productor/activar-correo/activar-correo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__cooperativa_listadoCooperativa_component__["a" /* ListadoCooperativaComponent */],
            __WEBPACK_IMPORTED_MODULE_12__cooperativa_crearCooperativa_component__["a" /* CrearCooperativaComponent */],
            __WEBPACK_IMPORTED_MODULE_13__cooperativa_cooperativa_detalle_cooperativa_detalle_component__["a" /* CooperativaDetalleComponent */],
            __WEBPACK_IMPORTED_MODULE_17__cooperativa_actualizardatos_component__["a" /* ActualizarDatosComponent */],
            __WEBPACK_IMPORTED_MODULE_14__productor_productorRegistro_component__["a" /* ProductorRegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_15__productor_productor_detalle_productor_detalle_component__["a" /* ProductorDetalleComponent */],
            __WEBPACK_IMPORTED_MODULE_16__productor_productor_lista_productor_lista_component__["a" /* ProductorListaComponent */],
            __WEBPACK_IMPORTED_MODULE_19__productor_productor_editar_productorEditar_component__["a" /* ProductorEditarComponent */],
            __WEBPACK_IMPORTED_MODULE_18__productor_registro_admin_registro_admin_component__["a" /* RegistroAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_20__productor_activar_correo_activar_correo_component__["a" /* ActivarCorreoComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng_lazyload_image__["LazyLoadImageModule"],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDL6TZQxNUkW3jlsAsHc8rRteGesrZmPuo',
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: 'cooperativa/crearCooperativa',
                    component: __WEBPACK_IMPORTED_MODULE_12__cooperativa_crearCooperativa_component__["a" /* CrearCooperativaComponent */]
                },
                {
                    path: 'cooperativa/listadoCooperativa',
                    component: __WEBPACK_IMPORTED_MODULE_11__cooperativa_listadoCooperativa_component__["a" /* ListadoCooperativaComponent */]
                },
                {
                    path: 'cooperativa/actualizardatos/:id',
                    component: __WEBPACK_IMPORTED_MODULE_17__cooperativa_actualizardatos_component__["a" /* ActualizarDatosComponent */]
                },
                {
                    path: 'cooperativa/detalle/:id',
                    component: __WEBPACK_IMPORTED_MODULE_13__cooperativa_cooperativa_detalle_cooperativa_detalle_component__["a" /* CooperativaDetalleComponent */]
                },
                {
                    path: 'productor/registro',
                    component: __WEBPACK_IMPORTED_MODULE_14__productor_productorRegistro_component__["a" /* ProductorRegistroComponent */]
                },
                {
                    path: 'productor/detalle/:id',
                    component: __WEBPACK_IMPORTED_MODULE_15__productor_productor_detalle_productor_detalle_component__["a" /* ProductorDetalleComponent */]
                },
                {
                    path: 'productor/lista',
                    component: __WEBPACK_IMPORTED_MODULE_16__productor_productor_lista_productor_lista_component__["a" /* ProductorListaComponent */]
                },
                {
                    path: 'productor/editar/:id',
                    component: __WEBPACK_IMPORTED_MODULE_19__productor_productor_editar_productorEditar_component__["a" /* ProductorEditarComponent */]
                },
                {
                    path: 'productor/admin/registro',
                    component: __WEBPACK_IMPORTED_MODULE_18__productor_registro_admin_registro_admin_component__["a" /* RegistroAdminComponent */]
                },
                {
                    path: 'productor/correo/activar',
                    component: __WEBPACK_IMPORTED_MODULE_20__productor_activar_correo_activar_correo_component__["a" /* ActivarCorreoComponent */]
                }
            ])
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cooperativa/actualizardatos.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Contact Section-->\n<section class=\"contact-section\">\n  <div class=\"auto-container\">\n      <!--Section Title-->\n        <h1>Actualizar Datos Cooperativa</h1>\n        <div class=\"contact-form default-form\" *ngIf=\"cooperativa != null\">\n\n           <form #formCooperativa=\"ngForm\" (ngSubmit)=\"actualizarCooperativa(formCooperativa)\">\n                <div class=\"row clearfix\">\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                        <input #nombre=\"ngModel\" [ngClass]=\"{'error':!nombre.valid && envioFormCooperativa}\" type=\"text\" name=\"nombre\" [(ngModel)]=\"cooperativa.nombre\" placeholder=\"* Nombre [Solo letras por favor]\" required maxlength=\"70\"  >\n                    </div>\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                        <input #nit=\"ngModel\" [ngClass]=\"{'error':!nit.valid && envioFormCooperativa}\" type=\"text\" name=\"nit\" [(ngModel)]=\"cooperativa.nit\" placeholder=\"* NIT [Solo numeros]\" required maxlength=\"70\" pattern=\"[0-9-]*\">\n                    </div>\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                        <input #correo=\"ngModel\" [ngClass]=\"{'error':!correo.valid && envioFormCooperativa}\" type=\"email\" name=\"correo\" [(ngModel)]=\"cooperativa.correo\" placeholder=\"* Correo [text@texto]\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n                    </div>\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                        <input #responsable=\"ngModel\" [ngClass]=\"{'error':!responsable.valid && envioFormCooperativa}\" type=\"text\" name=\"responsable\" [(ngModel)]=\"cooperativa.responsable\" placeholder=\"* Responsable [Solo letras]\" required maxlength=\"70\" pattern=\"[a-zA-Z ]*\">\n                    </div>\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                          <input #telefono=\"ngModel\" [ngClass]=\"{'error':!telefono.valid && envioFormCooperativa}\" type=\"text\" name=\"telefono\" [(ngModel)]=\"cooperativa.telefono\" placeholder=\"* Telefono\" required maxlength=\"70\" pattern=\"[0-9-()+ ]*\">\n                    </div>\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                        <input #zona=\"ngModel\" [ngClass]=\"{'error':!zona.valid && envioFormCooperativa}\" type=\"text\" name=\"zona\" [(ngModel)]=\"cooperativa.zona\" placeholder=\"* Zona \" required maxlength=\"70\">\n                    </div>\n\n                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                       <input #direccion [ngClass]=\"{'error':!direccion.valid && envioFormCooperativa}\" type=\"text\" name=\"direccion\" [(ngModel)]=\"cooperativa.direccion\" placeholder=\"* Dirección\" required maxlength=\"255\">\n                       <!--<input #direccion [ngClass]=\"{'error':!direccion.valid && envioFormCooperativa}\" type=\"text\" name=\"direccion\" value=\"\" placeholder=\"* Dirección\" required maxlength=\"255\" ngModel >-->\n                    </div>\n\n                    <div class=\"col-md-12 col-md-offset-0\" style=\"margin-bottom: 20px\">\n                      <agm-map class=\"registro-map\" [latitude]=\"marker.latitud\" [longitude]=\"marker.longitud\" (mapClick)=\"mapClicked($event , formCooperativa)\" [zoom]=\"marker.zoom\" style=\"height: 300px;\" >\n                        <agm-marker [latitude]=\"marker.latitud\" [longitude]=\"marker.longitud\"></agm-marker>\n                      </agm-map>\n                      <input #latitud=\"ngModel\" type=\"hidden\" name=\"latitud\" value=\"\" [(ngModel)]=\"cooperativa.latitud\" >\n                      <input #longitud=\"ngModel\" type=\"hidden\" name=\"longitud\" value=\"\" [(ngModel)]=\"cooperativa.longitud\">\n                    </div>\n\n                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                        <textarea #descripcion=\"ngModel\" [ngClass]=\"{'error':!descripcion.valid && envioFormCooperativa}\" name=\"descripcion\" placeholder=\"Descripción [Máx 550 caracteres]\" [(ngModel)]=\"cooperativa.descripcion\" maxlength=\"550\"></textarea>\n                    </div>\n\n                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-left\" >\n                      <span *ngIf=\"!formCooperativa.valid && !envioFormCooperativa\"> * Campos obligatorios</span>\n                      <br>\n                      <label *ngIf=\"!formCooperativa.valid && envioFormCooperativa\" class=\"error\">* Existen campos vacios que son obligatorios o existen campos invalidos.</label>\n                    </div>\n\n                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"text-center\">\n                            <button type=\"button\" class=\"theme-btn btn-style-five ui-state-disabled\" onclick=\"window.history.go(-1)\"> <span class=\"fa fa-angle-double-left\"></span> Atrás</button>\n                            <button type=\"submit\" class=\"theme-btn btn-style-two ui-state-disabled\">Actualizar</button>\n                        </div>\n                    </div>\n\n                </div>\n\n            </form>\n            <div class=\"text-center\">\n\n            </div>\n        </div>\n    </div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/cooperativa/actualizardatos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActualizarDatosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actualizardatos_service__ = __webpack_require__("../../../../../src/app/cooperativa/actualizardatos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActualizarDatosComponent = (function () {
    function ActualizarDatosComponent(route, router, cd, ActualizarDatosServices, mapsAPILoader, ngZone) {
        this.route = route;
        this.router = router;
        this.cd = cd;
        this.ActualizarDatosServices = ActualizarDatosServices;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.title = 'Actualizar cooperativa';
        this.envioFormCooperativa = false;
        this.cooperativa = null;
        this.marker = {};
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.marker = {
            latitud: 4.6486259,
            longitud: -74.2478963,
            zoom: 10
        };
    }
    ActualizarDatosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.ActualizarDatosServices.getCoop(+params["id"]);
        })
            .subscribe(function (response) {
            _this.cooperativa = response;
            _this.cd.detectChanges();
            //Cargar datos
            _this.marker = {
                latitud: _this.cooperativa.latitud,
                longitud: _this.cooperativa.longitud,
                zoom: 10
            };
            _this.setGeoLocalitation();
            _this.setAutocomplete();
        }, function (reason) {
            _this.cooperativa = null;
            alert("error al cargar datos");
        });
    };
    ActualizarDatosComponent.prototype.setAutocomplete = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.marker.latitud = place.geometry.location.lat();
                    _this.marker.longitud = place.geometry.location.lng();
                    _this.marker.zoom = 12;
                });
            });
        });
    };
    ActualizarDatosComponent.prototype.setGeoLocalitation = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.marker = {
                    latitud: position.coords.latitude,
                    longitud: position.coords.longitude
                };
            }, function (error) {
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
            });
        }
        ;
    };
    ActualizarDatosComponent.prototype.actualizarCooperativa = function (formCooperativa) {
        var _this = this;
        formCooperativa.controls['latitud'].setValue(this.marker.latitud);
        formCooperativa.controls['longitud'].setValue(this.marker.longitud);
        this.envioFormCooperativa = true;
        if (formCooperativa.valid) {
            formCooperativa.value.id = this.cooperativa.id;
            var resultado_1 = this.ActualizarDatosServices.guardarCooperativa(formCooperativa.value).subscribe(function (result) {
                if (resultado_1) {
                    alert("Datos guardados correctamente");
                    _this.router.navigateByUrl('cooperativa/listadoCooperativa');
                }
                else {
                    alert("Error almacenando datos");
                }
            });
        }
        else {
            //alert("Por favor llene todos los campos que son obligatorios y necesarios para la pagina. (*) ");
        }
    };
    ActualizarDatosComponent.prototype.mapClicked = function ($event, formCooperativa) {
        this.marker.latitud = $event.coords.lat;
        this.marker.longitud = $event.coords.lng;
        this.marker.zoom = 15;
        this.cooperativa.latitud = $event.coords.lat;
        this.cooperativa.longitud = $event.coords.lng;
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(this.marker.latitud, this.marker.longitud);
        var request = { location: latlng };
        geocoder.geocode(request, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0] != null) {
                    formCooperativa.controls['direccion'].setValue(results[0].formatted_address);
                    formCooperativa.value.direccion = results[0].formatted_address;
                }
                else {
                    console.log("No address available");
                }
            }
            else
                console.log("No esta disponible el geocoder");
        });
    };
    return ActualizarDatosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("direccion"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ActualizarDatosComponent.prototype, "searchElementRef", void 0);
ActualizarDatosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        //selector: 'app-crearCooperativa',
        template: __webpack_require__("../../../../../src/app/cooperativa/actualizardatos.component.html"),
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__actualizardatos_service__["a" /* ActualizarDatosService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__actualizardatos_service__["a" /* ActualizarDatosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actualizardatos_service__["a" /* ActualizarDatosService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _g || Object])
], ActualizarDatosComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=actualizardatos.component.js.map

/***/ }),

/***/ "../../../../../src/app/cooperativa/actualizardatos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActualizarDatosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActualizarDatosService = (function () {
    function ActualizarDatosService(http) {
        this.http = http;
    }
    ActualizarDatosService.prototype.guardarCooperativa = function (cooperativa) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(cooperativa);
        return this.http.post('/cooperativa/actualizarCooperativa/', body, options).map(function (response) { return response.json(); });
    };
    ActualizarDatosService.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    ActualizarDatosService.prototype.getCoop = function (id) {
        return this.http.get('/cooperativa/consultarCooperativa/' + id)
            .map(function (response) { return response.json(); });
    };
    return ActualizarDatosService;
}());
ActualizarDatosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ActualizarDatosService);

var _a;
//# sourceMappingURL=actualizardatos.service.js.map

/***/ }),

/***/ "../../../../../src/app/cooperativa/cooperativa-detalle/cooperativa-detalle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cooperativa/cooperativa-detalle/cooperativa-detalle.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--Our Team-->\n    <section class=\"team-section\">\n    \t<div class=\"auto-container\">\n        \t<!--Section Title-->\n            <div class=\"sec-title-one\">\n                <h2><a routerLink=\"/cooperativa/listadoCooperativa\">Nuestras cooperativas</a></h2>\n            </div>\n\n        \t<div class=\"row clearfix\" *ngIf=\"cooperativa != null\">\n                \t<!--Default Team Member-->\n                    <div class=\"default-team-member\" *ngIf=\"cooperativa\">\n                        <div class=\"inner-box clearfix\">\n                            <!--Image Column-->\n                            <div class=\"image-column\"><figure class=\"image\"><img src=\"../../static/images/resource/team-image-1.jpg\"  alt=\"\"></figure></div>\n                            <!--Content Column-->\n                            <div class=\"content-column\">\n                                <div class=\"social-links\"><small></small><a routerLink=\"/cooperativa/listadoCooperativa\">\n                                      <span class=\"fa fa-step-backward title-box title\" title=\"Volver\"> Volver</span>\n                                    </a>\n                                    <a routerLink=\"/cooperativa/actualizardatos/{{ cooperativa.id }}\">\n                                      <span class=\"fa fa-edit title-box title\" title=\"Editar Cooperativa\"> Editar</span>\n                                    </a></div>\n                                <div class=\"inner\"><h3>{{ cooperativa.nombre }}\n                                    <br><small><b>Zona</b> {{ cooperativa.zona }} | {{ cooperativa.direccion }} | {{ cooperativa.correo }} |\n                                        <br><b>NIT</b> {{ cooperativa.nit }} | {{ cooperativa.responsable }}</small></h3>\n                                    <div class=\"text\">{{ cooperativa.descripcion }}</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <app-productor-lista filtrocooperativa=\"{{ cooperativa.id }}\"></app-productor-lista>\n            </div>\n        </div>\n    </section>\n"

/***/ }),

/***/ "../../../../../src/app/cooperativa/cooperativa-detalle/cooperativa-detalle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CooperativaDetalleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cooperativa_service__ = __webpack_require__("../../../../../src/app/cooperativa/cooperativa-detalle/cooperativa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productor_productor_lista_productor_lista_component__ = __webpack_require__("../../../../../src/app/productor/productor-lista/productor-lista.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CooperativaDetalleComponent = (function () {
    function CooperativaDetalleComponent(element, route, router, cd, cooperativaServices) {
        this.element = element;
        this.route = route;
        this.router = router;
        this.cd = cd;
        this.cooperativaServices = cooperativaServices;
        this.cooperativa = null;
    }
    CooperativaDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.cooperativaServices.getCoop(+params["id"]);
        })
            .subscribe(function (response) {
            _this.cooperativa = response;
            _this.cd.detectChanges();
        }, function (reason) {
            _this.cooperativa = null;
            alert("error al cargar datos");
        });
    };
    return CooperativaDetalleComponent;
}());
CooperativaDetalleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cooperativa-detalle',
        template: __webpack_require__("../../../../../src/app/cooperativa/cooperativa-detalle/cooperativa-detalle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cooperativa/cooperativa-detalle/cooperativa-detalle.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__cooperativa_service__["a" /* CooperativaService */],
            __WEBPACK_IMPORTED_MODULE_3__productor_productor_lista_productor_lista_component__["a" /* ProductorListaComponent */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__cooperativa_service__["a" /* CooperativaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cooperativa_service__["a" /* CooperativaService */]) === "function" && _e || Object])
], CooperativaDetalleComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=cooperativa-detalle.component.js.map

/***/ }),

/***/ "../../../../../src/app/cooperativa/cooperativa-detalle/cooperativa.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CooperativaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CooperativaService = (function () {
    function CooperativaService(http) {
        this.http = http;
    }
    CooperativaService.prototype.getCoop = function (id) {
        return this.http.get('/cooperativa/consultarCooperativa/' + id)
            .map(function (response) { return response.json(); });
    };
    return CooperativaService;
}());
CooperativaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CooperativaService);

var _a;
//# sourceMappingURL=cooperativa.service.js.map

/***/ }),

/***/ "../../../../../src/app/cooperativa/crearCooperativa.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Contact Section-->\n<section class=\"contact-section\">\n  <div class=\"auto-container\">\n      <!--Section Title-->\n        <h1>Nueva Cooperativa</h1>\n        <div class=\"contact-form default-form\">\n\n           <form #formCooperativa=\"ngForm\" (ngSubmit)=\"guardarCooperativa(formCooperativa)\">\n                <div class=\"row clearfix\">\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                        <input #nombre=\"ngModel\" [ngClass]=\"{'error':!nombre.valid && envioFormCooperativa}\" type=\"text\" name=\"nombre\" value=\"\" placeholder=\"* Nombre [Solo letras por favor]\" ngModel required maxlength=\"70\"  >\n                    </div>\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                        <input #nit=\"ngModel\" [ngClass]=\"{'error':!nit.valid && envioFormCooperativa}\" type=\"text\" name=\"nit\" value=\"\" placeholder=\"* NIT [Solo numeros]\" ngModel required maxlength=\"70\" pattern=\"[0-9-]*\">\n                    </div>\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                        <input #correo=\"ngModel\" [ngClass]=\"{'error':!correo.valid && envioFormCooperativa}\" type=\"email\" name=\"correo\" value=\"\" placeholder=\"* Correo [text@texto]\" ngModel required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n                    </div>\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                        <input #responsable=\"ngModel\" [ngClass]=\"{'error':!responsable.valid && envioFormCooperativa}\" type=\"text\" name=\"responsable\" value=\"\" placeholder=\"* Responsable [Solo letras]\" ngModel required maxlength=\"70\" pattern=\"[a-zA-Z ]*\">\n                    </div>\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                          <input #telefono=\"ngModel\" [ngClass]=\"{'error':!telefono.valid && envioFormCooperativa}\" type=\"text\" name=\"telefono\" value=\"\" placeholder=\"* Telefono\" ngModel required maxlength=\"70\" pattern=\"[0-9-()+ ]*\">\n                    </div>\n\n                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                        <input #zona=\"ngModel\" [ngClass]=\"{'error':!zona.valid && envioFormCooperativa}\" type=\"text\" name=\"zona\" value=\"\" placeholder=\"* Zona \" ngModel required maxlength=\"70\">\n                    </div>\n\n                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                          <input #direccion [ngClass]=\"{'error':!direccion.valid && envioFormCooperativa}\" type=\"text\" name=\"direccion\" value=\"\" placeholder=\"* Dirección\" required maxlength=\"255\" ngModel >\n                    </div>\n\n                    <div class=\"col-md-12 col-md-offset-0\" style=\"margin-bottom: 20px\">\n                      <agm-map class=\"registro-map\" [latitude]=\"marker.latitud\" [longitude]=\"marker.longitud\" (mapClick)=\"mapClicked($event , formCooperativa)\" [zoom]=\"marker.zoom\" style=\"height: 300px;\">\n                        <agm-marker [latitude]=\"marker.latitud\" [longitude]=\"marker.longitud\"></agm-marker>\n                      </agm-map>\n                      <input #latitud=\"ngModel\" type=\"hidden\" name=\"latitud\" value=\"\" ngModel>\n                      <input #longitud=\"ngModel\" type=\"hidden\" name=\"longitud\" value=\"\" ngModel>\n                    </div>\n\n                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                        <textarea #descripcion=\"ngModel\" [ngClass]=\"{'error':!descripcion.valid && envioFormCooperativa}\" name=\"descripcion\" placeholder=\"Descripción [Máx 550 caracteres]\" ngModel maxlength=\"550\"></textarea>\n                    </div>\n\n                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-left\" >\n                      <span *ngIf=\"!formCooperativa.valid && !envioFormCooperativa\"> * Campos obligatorios</span>\n                      <br>\n                      <label *ngIf=\"!formCooperativa.valid && envioFormCooperativa\" class=\"error\">* Existen campos vacios que son obligatorios o existen campos invalidos.</label>\n                    </div>\n\n                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"text-center\"><button  type=\"submit\" class=\"theme-btn btn-style-two ui-state-disabled\">Guardar</button></div>\n\n                    </div>\n\n                </div>\n\n            </form>\n        </div>\n    </div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/cooperativa/crearCooperativa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearCooperativaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crearCooperativa_service__ = __webpack_require__("../../../../../src/app/cooperativa/crearCooperativa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrearCooperativaComponent = (function () {
    function CrearCooperativaComponent(crearCooperativaServices, router, mapsAPILoader, ngZone) {
        this.crearCooperativaServices = crearCooperativaServices;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.title = 'Crear cooperativa';
        this.envioFormCooperativa = false;
        this.marker = {};
        this.marker = {
            latitud: 4.6486259,
            longitud: -74.2478963,
            zoom: 10
        };
        this.setGeoLocalitation();
        this.setAutocomplete();
    }
    CrearCooperativaComponent.prototype.setAutocomplete = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.marker.latitud = place.geometry.location.lat();
                    _this.marker.longitud = place.geometry.location.lng();
                    _this.marker.zoom = 12;
                });
            });
        });
    };
    CrearCooperativaComponent.prototype.setGeoLocalitation = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.marker = {
                    latitud: position.coords.latitude,
                    longitud: position.coords.longitude
                };
            }, function (error) {
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
            });
        }
        ;
    };
    CrearCooperativaComponent.prototype.guardarCooperativa = function (formCooperativa) {
        //console.log(formCooperativa.value);
        //console.log(formCooperativa.valid);
        formCooperativa.controls['latitud'].setValue(this.marker.latitud);
        formCooperativa.controls['longitud'].setValue(this.marker.longitud);
        this.envioFormCooperativa = true;
        if (formCooperativa.valid) {
            var resultado = this.crearCooperativaServices.guardarCooperativa(formCooperativa.value).subscribe();
            if (resultado) {
                alert("Datos guardados correctamente");
                this.router.navigateByUrl('cooperativa/listadoCooperativa');
            }
            else {
                alert("Error almacenando datos");
            }
        }
        else {
            //alert("Por favor llene todos los campos que son obligatorios. (*) ");
        }
    };
    CrearCooperativaComponent.prototype.mapClicked = function ($event, formCooperativa) {
        this.marker.latitud = $event.coords.lat;
        this.marker.longitud = $event.coords.lng;
        this.marker.zoom = 12;
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(this.marker.latitud, this.marker.longitud);
        var request = { location: latlng };
        geocoder.geocode(request, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0] != null) {
                    formCooperativa.controls['direccion'].setValue(results[0].formatted_address);
                    //formCooperativa.value.direccion = results[0].formatted_address ;
                }
                else {
                    console.log("No address available");
                }
            }
            else
                console.log("No esta disponible el geocoder");
        });
    };
    return CrearCooperativaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("direccion"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], CrearCooperativaComponent.prototype, "searchElementRef", void 0);
CrearCooperativaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        //selector: 'app-crearCooperativa',
        template: __webpack_require__("../../../../../src/app/cooperativa/crearCooperativa.component.html"),
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__crearCooperativa_service__["a" /* CrearCooperativaService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__crearCooperativa_service__["a" /* CrearCooperativaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__crearCooperativa_service__["a" /* CrearCooperativaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object])
], CrearCooperativaComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=crearCooperativa.component.js.map

/***/ }),

/***/ "../../../../../src/app/cooperativa/crearCooperativa.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearCooperativaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrearCooperativaService = (function () {
    function CrearCooperativaService(http) {
        this.http = http;
    }
    CrearCooperativaService.prototype.guardarCooperativa = function (cooperativa) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(cooperativa);
        return this.http.post('guardarCooperativa/', body, options).map(function (response) { return response.json(); });
    };
    CrearCooperativaService.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    return CrearCooperativaService;
}());
CrearCooperativaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CrearCooperativaService);

var _a;
//# sourceMappingURL=crearCooperativa.service.js.map

/***/ }),

/***/ "../../../../../src/app/cooperativa/listadoCooperativa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/*.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}*/\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cooperativa/listadoCooperativa.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--Our Team-->\n    <section class=\"team-section\">\n    \t<div class=\"auto-container\">\n        \t<!--Section Title-->\n            <div class=\"sec-title-one\">\n                <h2><a routerLink=\"/cooperativa/listadoCooperativa\">Nuestras cooperativas</a></h2>\n            </div>\n\n        \t<div class=\"row clearfix\" *ngFor=\"let item of cooperativas\">\n            \t<div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                \t<!--Default Team Member-->\n                    <div class=\"default-team-member\" *ngIf=\"item[0]\">\n                        <div class=\"inner-box clearfix\">\n                            <!--Image Column-->\n                            <div class=\"image-column\"><figure class=\"image\"><img src=\"../static/images/resource/team-image-1.jpg\"  alt=\"\"></figure></div>\n                            <!--Content Column-->\n                            <div class=\"content-column\">\n                                <div class=\"inner\">\n                                    <h3>{{ item[0].nombre }}\n                                    <br><small><b>Zona</b> {{ item[0].zona }} | {{ item[0].direccion }} | {{ item[0].correo }} |\n                                        <br><b>NIT</b> {{ item[0].nit }} | {{ item[0].responsable }}</small></h3>\n                                    <div class=\"text\">{{ item[0].descripcion.slice(0, sizeDescripcion) + \"...\" }}</div>\n                                    <div class=\"social-links\">\n                                        <a routerLink=\"/cooperativa/detalle/{{ item[0].id }}\">\n                                          <span class=\"fa fa-search title-box title\" title=\"Detalles productor\"> Ver más</span>\n                                        </a>\n                                        <a routerLink=\"/cooperativa/actualizardatos/{{ item[0].id }}\">\n                                          <span class=\"fa fa-edit title-box title\" title=\"Editar Cooperativa\"> Editar</span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--Default Team Member-->\n                    <div class=\"default-team-member\" *ngIf=\"item[1]\">\n                        <div class=\"inner-box clearfix\">\n                            <!--Image Column-->\n                            <div class=\"image-column\"><figure class=\"image\"><img src=\"../static/images/resource/team-image-2.jpg\"  alt=\"\"></figure></div>\n                            <!--Content Column-->\n                            <div class=\"content-column\">\n                                <div class=\"inner\">\n                                    <h3>{{ item[1].nombre }}\n                                    <br><small><b>Zona</b> {{ item[1].zona }} | {{ item[1].direccion }} | {{ item[1].correo }} |\n                                        <br><b>NIT</b> {{ item[1].nit }} | {{ item[1].responsable }}</small></h3>\n                                    <div class=\"text\">{{ item[1].descripcion.slice(0, sizeDescripcion) + \"...\" }}</div>\n                                    <div class=\"social-links\">\n                                        <a routerLink=\"/cooperativa/detalle/{{ item[1].id }}\">\n                                          <span class=\"fa fa-search title-box title\" title=\"Detalles productor\"> Ver más</span>\n                                        </a>\n                                        <a routerLink=\"/cooperativa/actualizardatos/{{ item[1].id }}\">\n                                          <span class=\"fa fa-edit title-box title\" title=\"Editar Cooperativa\"> Editar</span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\" *ngIf=\"item[2]\">\n                \t<!--Default Team Member / Vertical-->\n                    <div class=\"default-team-member vertical\">\n                        <div class=\"inner-box clearfix\">\n                            <!--Image Column-->\n                            <div class=\"image-column\"><figure class=\"image\"><img src=\"../static/images/resource/team-image-3.jpg\"  alt=\"\"></figure></div>\n                            <!--Content Column-->\n                            <div class=\"content-column\">\n                                <div class=\"inner\">\n                                    <h3>{{ item[2].nombre }}\n                                    <br><small><b>Zona</b> {{ item[2].zona }} | {{ item[2].direccion }} | {{ item[2].correo }} |\n                                        <br><b>NIT</b> {{ item[2].nit }} | {{ item[2].responsable }}</small></h3>\n                                    <div class=\"text\">{{ item[2].descripcion.slice(0, sizeDescripcion) + \"...\" }}</div>\n                                    <div class=\"social-links\">\n                                        <a routerLink=\"/cooperativa/detalle/{{ item[2].id }}\">\n                                          <span class=\"fa fa-search title-box title\" title=\"Detalles productor\"> Ver más</span>\n                                        </a>\n                                        <a routerLink=\"/cooperativa/actualizardatos/{{ item[2].id }}\">\n                                          <span class=\"fa fa-edit title-box title\" title=\"Editar Cooperativa\"> Editar</span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </section>\n"

/***/ }),

/***/ "../../../../../src/app/cooperativa/listadoCooperativa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoCooperativaComponent; });
/* unused harmony export CooperativaDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listadoCooperativa_service__ = __webpack_require__("../../../../../src/app/cooperativa/listadoCooperativa.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListadoCooperativaComponent = (function () {
    function ListadoCooperativaComponent(listadoCooperativaServices) {
        this.listadoCooperativaServices = listadoCooperativaServices;
        this.title = 'Listado cooperativas';
        this.cooperativas = new Array();
        this.sizeDescripcion = 120;
        this.displayedColumns = ['nombre', 'nit', 'responsable', 'id'];
        this.dataSource = null;
    }
    ListadoCooperativaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listadoCooperativaServices.getCooperativas()
            .subscribe(function (cooperativas) {
            var grupoCooperativa = new Array();
            var contador = 0;
            var index = 0;
            for (var _i = 0, cooperativas_1 = cooperativas; _i < cooperativas_1.length; _i++) {
                var cooperativa = cooperativas_1[_i];
                contador++;
                grupoCooperativa.push(cooperativa);
                if (contador == 3 || index == cooperativas.length - 1) {
                    _this.cooperativas.push(grupoCooperativa);
                    grupoCooperativa = new Array();
                    contador = 0;
                }
                index++;
            }
            /* this.cooperativas = cooperativas; */
            /*console.log(this.cooperativas );*/
            _this.dataSource = new CooperativaDataSource(_this.cooperativas);
        });
    };
    return ListadoCooperativaComponent;
}());
ListadoCooperativaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listadocooperativa',
        template: __webpack_require__("../../../../../src/app/cooperativa/listadoCooperativa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cooperativa/listadoCooperativa.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__listadoCooperativa_service__["a" /* ListadoCooperativaService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__listadoCooperativa_service__["a" /* ListadoCooperativaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__listadoCooperativa_service__["a" /* ListadoCooperativaService */]) === "function" && _a || Object])
], ListadoCooperativaComponent);

var CooperativaDataSource = (function (_super) {
    __extends(CooperativaDataSource, _super);
    function CooperativaDataSource(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    CooperativaDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.data);
    };
    CooperativaDataSource.prototype.disconnect = function () { };
    return CooperativaDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

var _a;
//# sourceMappingURL=listadoCooperativa.component.js.map

/***/ }),

/***/ "../../../../../src/app/cooperativa/listadoCooperativa.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoCooperativaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListadoCooperativaService = (function () {
    function ListadoCooperativaService(http) {
        this.http = http;
    }
    ListadoCooperativaService.prototype.getCooperativas = function () {
        return this.http.get('/cooperativa/cooperativalist')
            .map(function (response) { return response.json(); });
    };
    return ListadoCooperativaService;
}());
ListadoCooperativaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ListadoCooperativaService);

var _a;
//# sourceMappingURL=listadoCooperativa.service.js.map

/***/ }),

/***/ "../../../../../src/app/productor/activar-correo/activar-correo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".activar-desactivar-module section{\n  width: 100px;\n  height: 100px;\n  background: #555;\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  margin-top: 5px;\n  border: 1px solid gray;\n  border-radius: 5px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n}\n\n.activar-desactivar-module .slideThree {\n  width: 80px;\n  height: 26px;\n  background: #333;\n  margin: 20px auto;\n  position: relative;\n  border-radius: 50px;\n  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2);\n}\n\n.activar-desactivar-module .slideThree:before {\n    content: 'ON';\n    color: #27ae60;\n    position: absolute;\n    left: 10px;\n    z-index: 0;\n    font: 12px/26px Arial, sans-serif;\n    font-weight: bold;\n}\n\n.activar-desactivar-module .slideThree:after {\n    content: 'OFF';\n    color: #000;\n    position: absolute;\n    right: 10px;\n    z-index: 0;\n    font: 12px/26px Arial, sans-serif;\n    font-weight: bold;\n    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.15);\n}\n\n.activar-desactivar-module input[type=checkbox] {\n  visibility: hidden;\n}\n\n.slideThree input[type=checkbox]:checked + label {\n    left: 43px;\n}\n\n.slideThree label {\n    display: block;\n    width: 34px;\n    height: 20px;\n    cursor: pointer;\n    position: absolute;\n    top: 3px;\n    left: 3px;\n    z-index: 1;\n    background: #fcfff4;\n    background: linear-gradient(to bottom, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);\n    border-radius: 50px;\n    transition: all 0.4s ease;\n    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productor/activar-correo/activar-correo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"activar-desactivar-module\">\n  <h1>Activar/Desactivar envio de correos</h1>\n  <section class=\"styled-checkbox\" style=\"background: none; border: none; box-shadow: none;\">\n    <div class=\"slideThree\">\n      <input type=\"checkbox\" [(ngModel)]=\"correoActivo\" (change)=\"activarCorreo()\" value=\"None\" id=\"slideThree\" name=\"check\" checked=\"\">\n      <label for=\"slideThree\"></label>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/productor/activar-correo/activar-correo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivarCorreoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productor_service__ = __webpack_require__("../../../../../src/app/productor/productor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivarCorreoComponent = (function () {
    function ActivarCorreoComponent(productorService) {
        this.productorService = productorService;
        this.correoActivo = false;
    }
    ActivarCorreoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productorService.correoActivo().subscribe(function (response) {
            _this.correoActivo = response;
        });
    };
    ActivarCorreoComponent.prototype.activarCorreo = function () {
        var _this = this;
        var body = {
            activar: this.correoActivo
        };
        this.productorService.activarCorreo(body).subscribe(function (response) {
            var mensaje = _this.correoActivo ? "activado" : "desactivado";
            alert("El envio de correos fue " + mensaje + "correctamente.");
        });
    };
    return ActivarCorreoComponent;
}());
ActivarCorreoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-activar-correo',
        template: __webpack_require__("../../../../../src/app/productor/activar-correo/activar-correo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/productor/activar-correo/activar-correo.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__productor_service__["a" /* ProductorService */]
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__productor_service__["a" /* ProductorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__productor_service__["a" /* ProductorService */]) === "function" && _a || Object])
], ActivarCorreoComponent);

var _a;
//# sourceMappingURL=activar-correo.component.js.map

/***/ }),

/***/ "../../../../../src/app/productor/productor-detalle/productor-detalle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 300px;\n}\n\n.informacion-cooperativa{\n  overflow: hidden;\n}\n\n.informacion-cooperativa h4, .informacion-productor h4{\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0px 0px;\n  font-family: 'Roboto Slab',serif;\n  line-height: 1.4em;\n  color: #333333;\n  margin-bottom: 15px;\n}\n\n.informacion-cooperativa .no-padding,\n.informacion-cooperativa > div,\n.informacion-productor .no-padding,\n.informacion-productor > div,\n.no-padding{\n  padding: 0;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.envio-correo input[type=\"email\"], .envio-correo textarea {\n  border: solid 1px #777777;\n  border-radius: 5px;\n  margin: 10px 0;\n}\n\n.envio-correo button{\n  display: block;\n  float: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productor/productor-detalle/productor-detalle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shop-single\">\n    <!--Page Title-->\n    <section class=\"page-title\" style=\"background-image:url(/static/images/background/bg-page-title-1a.jpg);\">\n        <div class=\"auto-container\">\n            <h1>Productor</h1>\n        </div>\n    </section>\n\n    <div *ngIf=\"productor != null\">\n        <!--Product Details Section-->\n        <section class=\"product-details\">\n            <div class=\"auto-container\">\n                <!--Basic Details-->\n                <div class=\"basic-details\">\n                    <div class=\"row clearfix\">\n                        <div class=\"image-column col-md-4 col-sm-5 col-xs-12\">\n                            <figure class=\"image-box\"><a href=\"{{ productor.foto }}\"\n                                                         class=\"lightbox-image\"\n                                                         title=\"{{ productor.nombre }}\"><img\n                                    src=\"{{ productor.foto }}\" alt=\"\"></a></figure>\n                            <div *ngIf=\"!!productor.latitud && !!productor.longitud\">\n                                <h2 style=\"text-align: left\">Ubicacion</h2>\n                                <agm-map [latitude]=\"productor.latitud\"\n                                         [longitude]=\"productor.longitud\"\n                                         [zoom]=\"12\">\n                                    <agm-marker [latitude]=\"productor.latitud\"\n                                                [longitude]=\"productor.longitud\"></agm-marker>\n                                </agm-map>\n                            </div>\n                        </div>\n                        <div class=\"info-column col-md-8 col-sm-7 col-xs-12\" style=\"text-align: left\">\n                            <div class=\"details-header\">\n                                <h4>{{ productor.nombre }}</h4>\n                            </div>\n\n                            <div class=\"text\">\n                                {{ productor.descripcion }}\n                            </div>\n                            <div>\n                                <div class=\"form-horizontal\">\n                                    <div class=\"informacion-cooperativa\">\n                                        <h4>Cooperativa</h4>\n                                        <div class=\"col-sm-12\">\n                                            {{ productor.cooperativa.nombre }}\n                                        </div>\n                                        <div class=\"col-sm-12\">\n                                          <strong>NIT </strong>\n                                            {{ productor.cooperativa.nit }}\n                                        </div>\n                                        <div class=\"col-sm-12\">\n                                          <strong class=\"col-sm-12 text-left no-padding\">Representante Legal </strong>\n                                            {{ productor.cooperativa.responsable }}\n                                        </div>\n                                        <div class=\"col-sm-12\">\n                                          <strong class=\"col-sm-12 text-left no-padding\">Zona </strong>\n                                            {{ productor.cooperativa.zona }}\n                                        </div>\n                                    </div>\n                                    <div class=\"informacion-productor text\" >\n                                        <h4>Dirección</h4>\n                                        <div class=\"col-sm-9 no-padding\">\n                                            {{ productor.direccion }}\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"envio-correo\">\n                              <button class=\"theme-btn btn-style-two ui-state-disabled\" *ngIf=\"!email.activo && correoActivo\" (click)=\"mostrarFormularioCorreo()\">Contactar</button>\n                              <div class=\"message-content\" *ngIf=\"email.activo\">\n                                <input class=\"col-sm-9\" type=\"email\" [(ngModel)]=\"email.sender\" placeholder=\"Tu correo\">\n                                <textarea class=\"col-sm-12\" placeholder=\"Mensaje\" [(ngModel)]=\"email.message\"></textarea>\n                                <strong class=\"col-sm-12 no-padding\">Enviado a: {{email.receiver}}</strong>\n\n                                <button (click)=\"enviarCorreo()\" class=\"theme-btn btn-style-two ui-state-disabled\">Enviar</button>\n                              </div>\n                            </div>\n                        </div>\n                    </div>\n                  <button class=\"theme-btn btn-style-two ui-state-disabled\" onclick=\"window.history.go(-1)\">Atrás</button>\n                </div>\n              <!--Basic Details-->\n                <!--Fluid Section Two-->\n                <section class=\"fluid-section-two\">\n                    <div class=\"outer-box clearfix\">\n\n\n                    </div>\n                </section>\n\n            </div>\n        </section>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/productor/productor-detalle/productor-detalle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductorDetalleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productor_service__ = __webpack_require__("../../../../../src/app/productor/productor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductorDetalleComponent = (function () {
    function ProductorDetalleComponent(element, route, router, cd, productorServices) {
        this.element = element;
        this.route = route;
        this.router = router;
        this.cd = cd;
        this.productorServices = productorServices;
        this.productor = null;
        this.correoActivo = false;
        this.styles = [
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
        this.email = {
            sender: '',
            message: '',
            receiver: '',
            activo: false
        };
    }
    ProductorDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.productorServices.getProd(+params["id"]);
        })
            .subscribe(function (response) {
            _this.productor = response;
            console.log(_this.productor);
            _this.email.receiver = _this.productor.email;
            _this.cd.detectChanges();
        }, function (reason) {
            _this.productor = null;
            alert("error al cargar datos del productor");
        });
        this.productorServices.correoActivo().subscribe(function (response) {
            _this.correoActivo = response;
        });
    };
    ProductorDetalleComponent.prototype.mostrarFormularioCorreo = function () {
        console.log("Hola mundo");
        this.email.activo = true;
    };
    ProductorDetalleComponent.prototype.enviarCorreo = function () {
        var _this = this;
        if (this.email.sender && this.email.message && this.email.receiver) {
            this.productorServices.enviarCorreo(this.email).subscribe(function (response) {
                alert(response);
                _this.email = {
                    sender: '',
                    message: '',
                    receiver: _this.productor.email,
                    activo: false
                };
            }, function (reason) {
                console.log(reason);
            });
        }
        else {
            alert("Todos los campos son obligatorios");
        }
    };
    return ProductorDetalleComponent;
}());
ProductorDetalleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-productor-detalle',
        template: __webpack_require__("../../../../../src/app/productor/productor-detalle/productor-detalle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/productor/productor-detalle/productor-detalle.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__productor_service__["a" /* ProductorService */]
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__productor_service__["a" /* ProductorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__productor_service__["a" /* ProductorService */]) === "function" && _e || Object])
], ProductorDetalleComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=productor-detalle.component.js.map

/***/ }),

/***/ "../../../../../src/app/productor/productor-editar/productorEditar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=\"file\"]{\n  margin: 0 auto;\n  border: none;\n}\n\n.productor-registro-section{\n  overflow: hidden;\n  padding-bottom: 20px;\n}\n\nagm-map {\n  height: 300px;\n}\n\n.activar-desactivar-module section{\n  width: 100px;\n  height: 100px;\n  background: #555;\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  margin-top: 5px;\n  border: 1px solid gray;\n  border-radius: 5px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n}\n\n.activar-desactivar-module .slideThree {\n  width: 80px;\n  height: 26px;\n  background: #333;\n  margin: 20px auto;\n  position: relative;\n  border-radius: 50px;\n  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2);\n}\n\n.activar-desactivar-module .slideThree:before {\n    content: 'ON';\n    color: #27ae60;\n    position: absolute;\n    left: 10px;\n    z-index: 0;\n    font: 12px/26px Arial, sans-serif;\n    font-weight: bold;\n}\n\n.activar-desactivar-module .slideThree:after {\n    content: 'OFF';\n    color: #000;\n    position: absolute;\n    right: 10px;\n    z-index: 0;\n    font: 12px/26px Arial, sans-serif;\n    font-weight: bold;\n    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.15);\n}\n\n.activar-desactivar-module input[type=checkbox] {\n  visibility: hidden;\n}\n\n.slideThree input[type=checkbox]:checked + label {\n    left: 43px;\n}\n\n.slideThree label {\n    display: block;\n    width: 34px;\n    height: 20px;\n    cursor: pointer;\n    position: absolute;\n    top: 3px;\n    left: 3px;\n    z-index: 1;\n    background: #fcfff4;\n    background: linear-gradient(to bottom, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);\n    border-radius: 50px;\n    transition: all 0.4s ease;\n    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productor/productor-editar/productorEditar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"productor-registro-section\">\n  <div class=\"auto-container\">\n      <!--Section Title-->\n        <h1>Nuevo Productor</h1>\n\n      <div class=\"productor-form default-form row col-md-8 col-md-offset-2\">\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"text\" id=\"nombreProductor\" placeholder=\" * Nombre\" [(ngModel)]=\"productor.nombre\" />\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"text\" id=\"descripcionProductor\" placeholder=\"Acerca de m&iacute;\" [(ngModel)]=\"productor.descripcion\"/>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <select id=\"tipoDocumento\" [(ngModel)]=\"productor.tipo_documento.id\">\n            <option value=\"-1\">-- Tipo de Documento --</option>\n            <option value=\"1\" >C&eacute;dula de ciudadan&iacute;a</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"text\" id=\"numeroDocumentoProductor\" placeholder=\"N&uacute;mero de documento\" [(ngModel)]=\"productor.documento\"/>\n        </div>\n\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n          <select id=\"cooperativa\" [(ngModel)]=\"productor.cooperativa.id\" >\n            <option value=\"-1\">-- Cooperativa --</option>\n            <option *ngFor=\"let cooperativa of cooperativas\" value=\"{{cooperativa.id}}\" [attr.selected]=\"selected\"  >{{cooperativa.nombre}}</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12 checkbox-container\">\n          <label for=\"fincaCertificada\">Finca Certificada*: </label>\n          <input type=\"checkbox\" id=\"fincaCertificada\" placeholder=\"\" [(ngModel)]=\"productor.fincaCertificada\"/>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12 checkbox-container\">\n          <label for=\"productosOrganicos\">Productos Organicos*: </label>\n          <input type=\"checkbox\" id=\"productosOrganicos\" placeholder=\"\" [(ngModel)]=\"productor.productosOrganicos\"/>\n        </div>\n\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n          <input type=\"text\" autocapitalize=\"off\" spellcheck=\"off\" id=\"direccionProductor\" placeholder=\"Direcci&oacute;n\" #search [formControl]=\"searchControl\" [(ngModel)]=\"productor.direccion\"/>\n        </div>\n        <div class=\"col-md-12 col-md-offset-0 col-sm-12 row\" style=\"margin-bottom: 20px\">\n            <agm-map class=\"registro-map\" [latitude]=\"marker.latitud\" [longitude]=\"marker.longitud\" (mapClick)=\"mapClicked($event)\" [zoom]=\"marker.zoom\">\n              <agm-marker [latitude]=\"marker.latitud\" [longitude]=\"marker.longitud\"></agm-marker>\n            </agm-map>\n          </div>\n\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12 activar-desactivar-module\">\n          <label>Productor Activo: </label>\n          <section class=\"styled-checkbox\" style=\"background: none; border: none; box-shadow: none;\">\n            <div class=\"slideThree\">\n              <input type=\"checkbox\" [(ngModel)]=\"productor.aprobado\" value=\"None\" id=\"slideThree\" name=\"check\">\n              <label for=\"slideThree\"></label>\n            </div>\n          </section>\n        </div>\n        <div class=\"col-md-6 col-md-offset-3\"  style=\"margin-bottom: 20px\">\n            <label for=\"foto\">Foto*:</label>\n            <input type=\"file\" id=\"foto\" #entradaFoto (change)=\"loadFoto(entradaFoto)\">\n            <img src=\"{{productor.foto}}\" width=\"200\" >\n        </div>\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n          <button type=\"button\" class=\"theme-btn btn-style-five ui-state-disabled\" onclick=\"window.history.go(-1)\"> <span class=\"fa fa-angle-double-left\"></span> Atrás</button>\n          <button (click)=\"editarProductor()\" class=\"theme-btn btn-style-two ui-state-disabled\">Actualizar</button>\n        </div>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/productor/productor-editar/productorEditar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductorEditarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productor_service__ = __webpack_require__("../../../../../src/app/productor/productor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cooperativa_listadoCooperativa_service__ = __webpack_require__("../../../../../src/app/cooperativa/listadoCooperativa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductorEditarComponent = (function () {
    function ProductorEditarComponent(productorService, cooperativaService, mapsAPILoader, ngZone, route, router) {
        this.productorService = productorService;
        this.cooperativaService = cooperativaService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.route = route;
        this.router = router;
        this.title = "Editar Productor";
        this.marker = {};
        this.productor = {
            "tipo_documento": -1,
            "cooperativa": -1
        };
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.marker = {
            latitud: 4.6486259,
            longitud: -74.2478963,
            zoom: 10
        };
    }
    ProductorEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cooperativaService.getCooperativas()
            .subscribe(function (response) {
            _this.cooperativas = response;
        });
        this.route.params
            .switchMap(function (params) {
            return _this.productorService.getProd(+params["id"]);
        }).subscribe(function (response) {
            _this.productor = response;
            if (_this.productor.latitud && _this.productor.longitud) {
                _this.marker.latitud = _this.productor.latitud;
                _this.marker.longitud = _this.productor.longitud;
                _this.marker.zoom = 12;
            }
            else {
                _this.loadUserPosition();
            }
            _this.productor.aprobado = _this.productor.aprobado == "True" ? true : false;
            _this.setGeoLocalitation();
            _this.setAutocomplete();
            //console.log( this.productor )
        });
    };
    ProductorEditarComponent.prototype.loadUserPosition = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.marker = {
                    latitud: position.coords.latitude,
                    longitud: position.coords.longitude
                };
            }, function (error) {
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
            });
            this.productor.latitud = this.marker.latitud;
            this.productor.longitud = this.marker.longitud;
        }
        ;
    };
    ProductorEditarComponent.prototype.setAutocomplete = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.marker.latitud = place.geometry.location.lat();
                    _this.marker.longitud = place.geometry.location.lng();
                    _this.marker.zoom = 12;
                });
            });
        });
    };
    ProductorEditarComponent.prototype.setGeoLocalitation = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.marker = {
                    latitud: position.coords.latitude,
                    longitud: position.coords.longitude
                };
            }, function (error) {
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
            });
        }
        ;
    };
    ProductorEditarComponent.prototype.setCooperativa = function (cooperativa) {
        this.productor.cooperativa = cooperativa;
    };
    ProductorEditarComponent.prototype.editarProductor = function () {
        var _this = this;
        if (this.productor.nombre && this.productor.descripcion && this.productor.tipo_documento
            && this.productor.documento && this.productor.direccion && this.productor.cooperativa
            && this.productor.foto) {
            this.productor.latitud = this.marker.latitud;
            this.productor.longitud = this.marker.longitud;
            this.productor.id_cooperativa = this.productor.cooperativa.id;
            this.productor.id_tipo_documento = this.productor.tipo_documento.id;
            /*console.log(this.productor)
            return false*/
            this.route.params
                .switchMap(function (params) {
                return _this.productorService.editarProductor(_this.productor, params["id"]);
            }).subscribe(function (response) {
                alert("Productor actualizado!");
                _this.productor = {};
                _this.router.navigateByUrl('productor/lista');
            });
        }
    };
    ProductorEditarComponent.prototype.loadFoto = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                this.productor.foto = e.target.result;
            }.bind(this);
            reader.readAsDataURL(input.files[0]);
        }
    };
    ProductorEditarComponent.prototype.mapClicked = function ($event) {
        var _this = this;
        this.marker.latitud = $event.coords.lat;
        this.marker.longitud = $event.coords.lng;
        this.marker.zoom = 12;
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(this.marker.latitud, this.marker.longitud);
        var request = { location: latlng };
        geocoder.geocode(request, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0] != null) {
                    _this.productor.direccion = results[0].formatted_address;
                }
                else {
                    console.log("No address available");
                }
            }
            else
                console.log("No esta disponible el geocoder");
        });
    };
    return ProductorEditarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ProductorEditarComponent.prototype, "searchElementRef", void 0);
ProductorEditarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        //selector: 'app-productor-registro',
        template: __webpack_require__("../../../../../src/app/productor/productor-editar/productorEditar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/productor/productor-editar/productorEditar.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__productor_service__["a" /* ProductorService */],
            __WEBPACK_IMPORTED_MODULE_4__cooperativa_listadoCooperativa_service__["a" /* ListadoCooperativaService */]
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__productor_service__["a" /* ProductorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__productor_service__["a" /* ProductorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__cooperativa_listadoCooperativa_service__["a" /* ListadoCooperativaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cooperativa_listadoCooperativa_service__["a" /* ListadoCooperativaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object])
], ProductorEditarComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=productorEditar.component.js.map

/***/ }),

/***/ "../../../../../src/app/productor/productor-lista/productor-lista.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* Absolute Center Spinner */\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n/* Transparent Overlay */\n.loading-indicator:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.3);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productor/productor-lista/productor-lista.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Page Title-->\n<section class=\"page-title\" style=\"background-image:url(/static/images/background/bg-page-title-1a.jpg);\">\n    <div class=\"auto-container\">\n        <h1>Productores</h1>\n    </div>\n</section>\n\n<!--Shop Section-->\n<section class=\"shop-section\">\n    <div class=\"auto-container\">\n        <div class=\"example-container mat-elevation-z8\">\n            <mat-table #table [dataSource]=\"dataSource\">\n\n                <!--- Note that these columns can be defined in any order.\n                      The actual rendered columns are set as a property on the row definition\" -->\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"foto\">\n                    <mat-header-cell *matHeaderCellDef> Foto</mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"><img [lazyLoad]=\"element.foto\" style=\"width: 80%;\"/></mat-cell>\n                </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"nombre\">\n                    <mat-header-cell *matHeaderCellDef> Nombre</mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{ element.nombre }} </mat-cell>\n                </ng-container>\n\n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"documento\">\n                    <mat-header-cell *matHeaderCellDef> Documento</mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{ element.documento }} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"aprobado\">\n                    <mat-header-cell *matHeaderCellDef> Aprobado</mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{ element.aprobado }} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"id\">\n                    <mat-header-cell *matHeaderCellDef> Acciones</mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\">\n\n                        <a routerLink=\"/productor/detalle/{{ element.id }}\">\n                            <span class=\"fa fa-search title-box title\" title=\"Detalles productor\"></span>\n                        </a>\n\n                        <a routerLink=\"/productor/editar/{{ element.id }}\">\n                            <span class=\"fa fa-edit title-box title\" title=\"Editar productor\"></span>\n                        </a>\n                        <!--<a href=\"detalle/{{ element.id }}\">Ver</a>\n                      <a href=\"editar/{{ element.id }}\">Editar</a>-->\n                    </mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n            </mat-table>\n\n            <div class=\"loading-indicator\" *ngIf=\"loading\">\n                <mat-progress-spinner mode=\"indeterminate\" color=\"accent\"></mat-progress-spinner>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/productor/productor-lista/productor-lista.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductorListaComponent; });
/* unused harmony export ProductorDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productor_service__ = __webpack_require__("../../../../../src/app/productor/productor.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductorListaComponent = (function () {
    function ProductorListaComponent(productorServices) {
        this.productorServices = productorServices;
        this.filtrocooperativa = 0;
        this.displayedColumns = ['foto', 'nombre', 'documento', 'aprobado', 'id'];
        this.dataSource = null;
        this.loading = false;
    }
    ProductorListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.productorServices.getProductor()
            .subscribe(function (productores) {
            _this.productores = productores;
            /*console.log(this.productores );*/
            var filtrocooperativa2 = _this.filtrocooperativa;
            _this.productores = _this.productores.filter(function (data) {
                if (filtrocooperativa2 > 0) {
                    return data.cooperativa.id == filtrocooperativa2;
                }
                else {
                    return 'True';
                }
            });
            /*console.log(filtrocooperativa2 );*/
            /*console.log(this.productores );*/
            _this.dataSource = new ProductorDataSource(_this.productores);
            _this.loading = false;
        });
    };
    return ProductorListaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductorListaComponent.prototype, "filtrocooperativa", void 0);
ProductorListaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-productor-lista',
        template: __webpack_require__("../../../../../src/app/productor/productor-lista/productor-lista.component.html"),
        styles: [__webpack_require__("../../../../../src/app/productor/productor-lista/productor-lista.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__productor_service__["a" /* ProductorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__productor_service__["a" /* ProductorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__productor_service__["a" /* ProductorService */]) === "function" && _a || Object])
], ProductorListaComponent);

var ProductorDataSource = (function (_super) {
    __extends(ProductorDataSource, _super);
    function ProductorDataSource(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ProductorDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.data);
    };
    ProductorDataSource.prototype.disconnect = function () { };
    return ProductorDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

var _a;
//# sourceMappingURL=productor-lista.component.js.map

/***/ }),

/***/ "../../../../../src/app/productor/productor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductorService = (function () {
    function ProductorService(http) {
        this.http = http;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append("Cache-Control", "no-cache");
        headers.append("Cache-Control", "no-store");
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    ProductorService.prototype.setProductor = function (productor) {
        return this.http.post('/productor/service', productor)
            .map(function (response) { return response.json(); });
    };
    ProductorService.prototype.editarProductor = function (productor, id) {
        return this.http.post('/productor/editarProductor/' + id, productor)
            .map(function (response) { return response.json(); });
    };
    ProductorService.prototype.getProductor = function () {
        return this.http.get('/productor/service')
            .map(function (response) { return response.json(); });
        //console.log("texto");
    };
    ProductorService.prototype.getProd = function (id) {
        return this.http.get('/productor/get/' + id)
            .map(function (response) { return response.json(); });
    };
    ProductorService.prototype.enviarCorreo = function (email) {
        return this.http.post('/productor/correo', email, this.options).map(function (response) { return response.json(); });
    };
    ProductorService.prototype.correoActivo = function () {
        return this.http.get('/productor/correo/active/obtener').map(function (response) { return response.json(); });
    };
    ProductorService.prototype.activarCorreo = function (correo) {
        return this.http.post('/productor/correo/active', correo, this.options).map(function (response) { return response.json(); });
    };
    return ProductorService;
}());
ProductorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductorService);

var _a;
//# sourceMappingURL=productor.service.js.map

/***/ }),

/***/ "../../../../../src/app/productor/productorRegistro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=\"file\"]{\n  margin: 0 auto;\n  border: none;\n}\n\n.productor-registro-section{\n  overflow: hidden;\n  padding-bottom: 20px;\n}\n\nagm-map {\n  height: 300px;\n}\n\n.productor-section{\n  max-width: 650px;\n  margin: 0 auto;\n}\n\n.checkbox-container{\n  height: 48px;\n  line-height: 48px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productor/productorRegistro.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"productor-section\">\n  <div class=\"auto-container\">\n    <!--Section Title-->\n    <h1>Nuevo Productor</h1>\n    <div class=\"productor-form default-form\">\n      <div class=\"row clearfix\">\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"text\" id=\"nombreProductor\" placeholder=\"Nombre\" [(ngModel)]=\"productor.nombre\"/>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"text\" id=\"descripcionProductor\" placeholder=\"Acerca de m&iacute;\" [(ngModel)]=\"productor.descripcion\"/>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <select id=\"tipoDocumento\" [(ngModel)]=\"productor.tipo_documento\">\n            <option value=\"-1\">-- Tipo de Documento --</option>\n            <option value=\"1\">C&eacute;dula de ciudadan&iacute;a</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"text\" id=\"numeroDocumentoProductor\" placeholder=\"N&uacute;mero de documento\" [(ngModel)]=\"productor.documento\"/>\n        </div>\n\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"text\" id=\"nombreFinca\" placeholder=\"Nombre Finca\" [(ngModel)]=\"productor.nombreFinca\"/>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"email\" id=\"emailProductor\" placeholder=\"E-Mail\" [(ngModel)]=\"productor.email\"/>\n        </div>\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n          <select id=\"cooperativa\" [(ngModel)]=\"productor.cooperativa\">\n            <option value=\"-1\">-- Cooperativa --</option>\n            <option *ngFor=\"let cooperativa of cooperativas\" value=\"{{cooperativa.id}}\">{{cooperativa.nombre}}</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12 checkbox-container\">\n          <label for=\"fincaCertificada\">Finca Certificada*: </label>\n          <input type=\"checkbox\" id=\"fincaCertificada\" placeholder=\"\" [(ngModel)]=\"productor.fincaCertificada\"/>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12 checkbox-container\">\n          <label for=\"productosOrganicos\">Productos Organicos*: </label>\n          <input type=\"checkbox\" id=\"productosOrganicos\" placeholder=\"\" [(ngModel)]=\"productor.productosOrganicos\"/>\n        </div>\n\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n          <input type=\"text\" autocapitalize=\"off\" spellcheck=\"off\" id=\"direccionProductor\" placeholder=\"Direcci&oacute;n\" #search [formControl]=\"searchControl\" [(ngModel)]=\"productor.direccion\"/>\n        </div>\n\n        <div class=\"col-md-12 col-md-offset-0\" style=\"margin-bottom: 20px\">\n          <agm-map class=\"registro-map\" [latitude]=\"marker.latitud\" [longitude]=\"marker.longitud\" (mapClick)=\"mapClicked($event)\" [zoom]=\"marker.zoom\">\n            <agm-marker [latitude]=\"marker.latitud\" [longitude]=\"marker.longitud\"></agm-marker>\n          </agm-map>\n        </div>\n        <div class=\"form-group col-md-12 col-sm-12 \">\n          <label> Foto*: </label>\n          <input type=\"file\" #entradaFoto (change)=\"loadFoto(entradaFoto)\">\n          <canvas max-width=\"200\" max-height=\"200\" id=\"photoPreview\"></canvas>\n        </div>\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"text-center\"><button  (click)=\"saveProductor()\" class=\"theme-btn btn-style-two ui-state-disabled\">Guardar</button></div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/productor/productorRegistro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductorRegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productor_service__ = __webpack_require__("../../../../../src/app/productor/productor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cooperativa_listadoCooperativa_service__ = __webpack_require__("../../../../../src/app/cooperativa/listadoCooperativa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductorRegistroComponent = (function () {
    function ProductorRegistroComponent(productorService, cooperativaService, mapsAPILoader, ngZone) {
        this.productorService = productorService;
        this.cooperativaService = cooperativaService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.title = "Registrar Productor";
        this.marker = {};
        this.productor = {
            "tipo_documento": -1,
            "cooperativa": -1,
            "aprobado": "False"
        };
    }
    ProductorRegistroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cooperativaService.getCooperativas()
            .subscribe(function (response) {
            _this.cooperativas = response;
        });
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.setGeoLocalitation();
        this.setAutocomplete();
        //console.log( this.marker.latitud )
        if (!this.marker.latitud) {
            this.marker = {
                latitud: 4.6486259,
                longitud: -74.2478963,
                zoom: 7
            };
        }
    };
    ProductorRegistroComponent.prototype.setAutocomplete = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.marker.latitud = place.geometry.location.lat();
                    _this.marker.longitud = place.geometry.location.lng();
                    _this.marker.zoom = 10;
                });
            });
        });
    };
    ProductorRegistroComponent.prototype.setGeoLocalitation = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.marker = {
                    latitud: position.coords.latitude,
                    longitud: position.coords.longitude
                };
            }, function (error) {
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
            });
        }
        ;
    };
    ProductorRegistroComponent.prototype.saveProductor = function () {
        var _this = this;
        if (this.productor.nombre && this.productor.descripcion && this.productor.tipo_documento
            && this.productor.documento && this.productor.direccion && this.productor.cooperativa
            && this.productor.foto) {
            this.productor.latitud = this.marker.latitud;
            this.productor.longitud = this.marker.longitud;
            this.productorService.setProductor(this.productor).subscribe(function (response) {
                alert("Su informaci?n fue agregada con ?xito.");
                _this.productor = {};
            });
        }
        else {
            alert("Alguno de los datos está incompleto.");
        }
    };
    ProductorRegistroComponent.prototype.loadFoto = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var photo = new Image();
                photo.src = e.target.result;
                photo.onload = function () {
                    var canvas = document.getElementById('photoPreview'), context = canvas.getContext('2d');
                    context.drawImage(photo, 0, 0, 200, 200);
                    this.productor.foto = canvas.toDataURL();
                }.bind(this);
                this.productor.foto = e.target.result;
            }.bind(this);
            reader.readAsDataURL(input.files[0]);
        }
    };
    ProductorRegistroComponent.prototype.mapClicked = function ($event) {
        var _this = this;
        this.marker.latitud = $event.coords.lat;
        this.marker.longitud = $event.coords.lng;
        this.marker.zoom = 10;
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(this.marker.latitud, this.marker.longitud);
        var request = { location: latlng };
        geocoder.geocode(request, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0] != null) {
                    //let city = results[0].address_components[results[0].address_components.length-4].short_name;
                    _this.productor.direccion = results[0].formatted_address;
                    //console.log( results[0].formatted_address )
                    //this.shareService.setLocationDetails(city);
                }
                else {
                    //alert("No address available");
                    console.log("No address available");
                }
            }
            else
                console.log("No esta disponible el geocoder");
        });
    };
    return ProductorRegistroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ProductorRegistroComponent.prototype, "searchElementRef", void 0);
ProductorRegistroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        //  selector: 'app-productor-registro',
        template: __webpack_require__("../../../../../src/app/productor/productorRegistro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/productor/productorRegistro.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__productor_service__["a" /* ProductorService */],
            __WEBPACK_IMPORTED_MODULE_3__cooperativa_listadoCooperativa_service__["a" /* ListadoCooperativaService */]
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__productor_service__["a" /* ProductorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__productor_service__["a" /* ProductorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__cooperativa_listadoCooperativa_service__["a" /* ListadoCooperativaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cooperativa_listadoCooperativa_service__["a" /* ListadoCooperativaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object])
], ProductorRegistroComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=productorRegistro.component.js.map

/***/ }),

/***/ "../../../../../src/app/productor/registro-admin/registro-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=\"file\"]{\n  margin: 0 auto;\n  border: none;\n}\n\n.productor-registro-section{\n  overflow: hidden;\n  padding-bottom: 20px;\n}\n\nagm-map {\n  height: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productor/registro-admin/registro-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"productor-registro-section\">\n  <div class=\"auto-container\">\n      <!--Section Title-->\n        <h1>Administrador: Nuevo Productor</h1>\n\n      <div class=\"productor-form default-form row col-md-8 col-md-offset-2\">\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"text\" id=\"nombreProductor\" [(ngModel)]=\"productor.nombre\" placeholder=\" * Nombre\" />\n        </div>\n\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"text\" id=\"descripcionProductor\" placeholder=\"Acerca de m&iacute;\" [(ngModel)]=\"productor.descripcion\"/>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <select id=\"tipoDocumento\" [(ngModel)]=\"productor.tipo_documento\">\n            <option value=\"-1\">-- Tipo de Documento --</option>\n            <option value=\"1\">C&eacute;dula de ciudadan&iacute;a</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"text\" id=\"numeroDocumentoProductor\" placeholder=\"N&uacute;mero de documento\" [(ngModel)]=\"productor.documento\"/>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"text\" id=\"nombreFinca\" placeholder=\"Nombre Finca\" [(ngModel)]=\"productor.nombreFinca\"/>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"email\" id=\"emailProductor\" placeholder=\"E-Mail\" [(ngModel)]=\"productor.email\"/>\n        </div>\n\n\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n          <select id=\"cooperativa\" [(ngModel)]=\"productor.cooperativa\">\n            <option value=\"-1\">-- Cooperativa --</option>\n            <option *ngFor=\"let cooperativa of cooperativas\" value=\"{{cooperativa.id}}\">{{cooperativa.nombre}}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12 checkbox-container\">\n          <label for=\"fincaCertificada\">Finca Certificada*: </label>\n          <input type=\"checkbox\" id=\"fincaCertificada\" placeholder=\"\" [(ngModel)]=\"productor.fincaCertificada\"/>\n        </div>\n        <div class=\"form-group col-md-6 col-sm-6 col-xs-12 checkbox-container\">\n          <label for=\"productosOrganicos\">Productos Organicos*: </label>\n          <input type=\"checkbox\" id=\"productosOrganicos\" placeholder=\"\" [(ngModel)]=\"productor.productosOrganicos\"/>\n        </div>\n\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n          <input type=\"text\" autocapitalize=\"off\" spellcheck=\"off\" id=\"direccionProductor\" placeholder=\"Direcci&oacute;n\" #search [formControl]=\"searchControl\" [(ngModel)]=\"productor.direccion\"/>\n        </div>\n\n        <div class=\"col-md-12 col-md-offset-0\" style=\"margin-bottom: 20px\">\n          <agm-map class=\"registro-map\" [latitude]=\"marker.latitud\" [longitude]=\"marker.longitud\" (mapClick)=\"mapClicked($event)\" [zoom]=\"marker.zoom\">\n            <agm-marker [latitude]=\"marker.latitud\" [longitude]=\"marker.longitud\"></agm-marker>\n          </agm-map>\n        </div>\n\n        <div class=\"col-md-6 col-md-offset-3\">\n          <label for=\"foto\">Foto*:</label>\n          <input type=\"file\" id=\"foto\" #entradaFoto (change)=\"loadFoto(entradaFoto)\">\n          <img src=\"{{productor.foto}}\" width=\"200\" >\n        </div>\n\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n          <button (click)=\"saveProductor()\" class=\"theme-btn btn-style-two ui-state-disabled\">Guardar</button>\n        </div>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/productor/registro-admin/registro-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productor_service__ = __webpack_require__("../../../../../src/app/productor/productor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cooperativa_listadoCooperativa_service__ = __webpack_require__("../../../../../src/app/cooperativa/listadoCooperativa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistroAdminComponent = (function () {
    function RegistroAdminComponent(productorService, cooperativaService, mapsAPILoader, ngZone) {
        this.productorService = productorService;
        this.cooperativaService = cooperativaService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.title = "Administración: Registrar Productor";
        this.marker = {};
        this.productor = {
            "tipo_documento": -1,
            "cooperativa": -1,
            "aprobado": "True"
        };
    }
    RegistroAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cooperativaService.getCooperativas()
            .subscribe(function (response) {
            _this.cooperativas = response;
        });
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.setGeoLocalitation();
        this.setAutocomplete();
        if (!this.marker.latitud) {
            this.marker = {
                latitud: 4.6486259,
                longitud: -74.2478963,
                zoom: 5
            };
        }
    };
    RegistroAdminComponent.prototype.saveProductor = function () {
        var _this = this;
        if (this.productor.nombre && this.productor.descripcion && this.productor.tipo_documento
            && this.productor.documento && this.productor.direccion && this.productor.cooperativa
            && this.productor.foto) {
            this.productor.latitud = this.marker.latitud;
            this.productor.longitud = this.marker.longitud;
            this.productorService.setProductor(this.productor).subscribe(function (response) {
                alert("Su informaci?n fue agregada con ?xito.");
                _this.productor = {};
            });
        }
        else {
            alert("Alguno de los datos está incompleto.");
        }
    };
    RegistroAdminComponent.prototype.setAutocomplete = function () {
        var _this = this;
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.marker.latitud = place.geometry.location.lat();
                    _this.marker.longitud = place.geometry.location.lng();
                    _this.marker.zoom = 12;
                });
            });
        });
    };
    RegistroAdminComponent.prototype.setGeoLocalitation = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.marker = {
                    latitud: position.coords.latitude,
                    longitud: position.coords.longitude
                };
            }, function (error) {
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
            });
        }
        ;
    };
    RegistroAdminComponent.prototype.loadFoto = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                this.productor.foto = e.target.result;
            }.bind(this);
            reader.readAsDataURL(input.files[0]);
        }
    };
    RegistroAdminComponent.prototype.mapClicked = function ($event) {
        this.marker = {
            latitud: $event.coords.lat,
            longitud: $event.coords.lng
        };
    };
    return RegistroAdminComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], RegistroAdminComponent.prototype, "searchElementRef", void 0);
RegistroAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registro-admin',
        template: __webpack_require__("../../../../../src/app/productor/registro-admin/registro-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/productor/registro-admin/registro-admin.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__productor_service__["a" /* ProductorService */],
            __WEBPACK_IMPORTED_MODULE_3__cooperativa_listadoCooperativa_service__["a" /* ListadoCooperativaService */]
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__productor_service__["a" /* ProductorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__productor_service__["a" /* ProductorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__cooperativa_listadoCooperativa_service__["a" /* ListadoCooperativaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cooperativa_listadoCooperativa_service__["a" /* ListadoCooperativaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object])
], RegistroAdminComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=registro-admin.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map