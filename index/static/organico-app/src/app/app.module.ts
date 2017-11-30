import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";
import { AgmCoreModule } from "@agm/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule, MatProgressSpinnerModule,MatDatepickerModule ,MatNativeDateModule,MatDialogModule } from "@angular/material";
import { LazyLoadImageModule } from "ng-lazyload-image";

import { AppComponent } from './app.component';
import { ListadoCooperativaComponent } from './cooperativa/listadoCooperativa.component';
import { CrearCooperativaComponent } from './cooperativa/crearCooperativa.component';
import { CooperativaDetalleComponent } from './cooperativa/cooperativa-detalle/cooperativa-detalle.component';
import { ProductorRegistroComponent } from './productor/productorRegistro.component';
import { ProductorDetalleComponent } from './productor/productor-detalle/productor-detalle.component';
import { ProductorListaComponent } from './productor/productor-lista/productor-lista.component';
import { ActualizarDatosComponent } from './cooperativa/actualizardatos.component';
import { RegistroAdminComponent } from './productor/registro-admin/registro-admin.component';
import { ProductorEditarComponent } from './productor/productor-editar/productorEditar.component';
import { CrearForoComponent } from './administrador/foro/crearForo.component';
import { ListadoForosComponent } from './administrador/foro/listadoForos.component';
import { EditarForoComponent } from './administrador/foro/editarForo.component';
import { RespuestaForoComponent } from './administrador/foro/respuestaForo.component';
import { ActivarCorreoComponent } from "./productor/activar-correo/activar-correo.component";
import { CrearServicioComponent } from './cooperativa/servicio/crearServicio.component';
import { ListadoServicioComponent } from './cooperativa/servicio/listadoServicio.component';
import { CrearProductoComponent } from './cooperativa/productos/crearproducto.component';
import { DiasRepartoComponent } from './cooperativa/diasreparto/diasReparto.component';
import { ShopComponent } from './shop/shop.component';
import { ShopCarComponent } from './shop-car/shop-car.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoCooperativaComponent,
    CrearCooperativaComponent,
    CooperativaDetalleComponent,
    ActualizarDatosComponent,
    ProductorRegistroComponent,
    ProductorDetalleComponent,
    ProductorListaComponent,
    ProductorEditarComponent,
    RegistroAdminComponent,
    CrearForoComponent,
    ListadoForosComponent,
    EditarForoComponent,
    RespuestaForoComponent,
    RegistroAdminComponent,
    ActivarCorreoComponent,
    CrearServicioComponent,
    CrearProductoComponent,
    ListadoServicioComponent,
    DiasRepartoComponent,
    ShopComponent,
    ShopCarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    LazyLoadImageModule,
    MatProgressSpinnerModule,
    LazyLoadImageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDL6TZQxNUkW3jlsAsHc8rRteGesrZmPuo',
      libraries: ["places"]
    }),
    RouterModule.forRoot([
      {
        path: 'cooperativa/crearCooperativa',
        component: CrearCooperativaComponent
      },
      {
        path: 'cooperativa/listadoCooperativa',
        component: ListadoCooperativaComponent
      },
      {
        path: 'cooperativa/actualizardatos/:id',
        component: ActualizarDatosComponent
      },
      {
        path: 'cooperativa/Productos/crearProducto',
        component: CrearProductoComponent
      },
      {
        path: 'cooperativa/detalle/:id',
        component: CooperativaDetalleComponent
      },
      {
        path: 'productor/registro',
        component: ProductorRegistroComponent
      },
      {
        path: 'productor/detalle/:id',
        component: ProductorDetalleComponent
      },
      {
        path: 'productor/lista',
        component: ProductorListaComponent
      },
      {
        path: 'productor/editar/:id',
        component: ProductorEditarComponent
      },
      {
        path: 'productor/admin/registro',
        component: RegistroAdminComponent
      },
      {
        path: 'administrador/crearForo',
        component: CrearForoComponent
      },
      {
        path: 'administrador/listaForo',
        component: ListadoForosComponent
      },
      {
        path: 'administrador/editarForo/:id',
        component: EditarForoComponent
      },
      {
        path: 'administrador/respuestaForo/:id',
        component: RespuestaForoComponent
      },
      {
        path: "productor/correo/activar",
        component: ActivarCorreoComponent
      },
      {
        path: "productor/correo/activar",
        component: ActivarCorreoComponent
      },
      {
        path: 'cooperativa/servicio/crearServicio',
        component: CrearServicioComponent
      },
      {
        path: 'cooperativa/servicio/listadoServicios/:id',
        component: ListadoServicioComponent
      },
      {
        path: 'cooperativa/diasreparto/consultar/:id',
        component: DiasRepartoComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      }
    ])
  ],
 providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

