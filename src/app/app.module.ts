import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { ElementoComponent } from './components/elemento/elemento.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { DatosEntregaComponent } from './components/datos-entrega/datos-entrega.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculadoraComponent } from './shared/calculadora/calculadora.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeleccionComponent,
    ElementoComponent,
    ProductoComponent,
    ProductosComponent,
    AgendaComponent,
    EvaluacionComponent,
    DatosEntregaComponent,
    CalculadoraComponent,
    ResumenComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CalculadoraComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
