import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';

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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArw7TOl_K1zuxYi_8nR6niG5kBTyegHfU'
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
      }
    ])
  ],
 providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

