import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { ElementoComponent } from './components/elemento/elemento.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { DatosEntregaComponent } from './components/datos-entrega/datos-entrega.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'seleccion', component: SeleccionComponent },
  { path: 'elemento', component: ElementoComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'evaluacion', component: EvaluacionComponent },
  { path: 'datos-entrega', component: DatosEntregaComponent },
  { path: 'resumen', component: ResumenComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
