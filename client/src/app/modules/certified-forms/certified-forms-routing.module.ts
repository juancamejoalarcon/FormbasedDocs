import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PactoDeSociosComponent,
  ContratoArrasPenitencialesComponent,
  ContratoCompraventaVehiculoComponent
 } from './forms';
import { CertifiedFormsComponent } from './certified-forms.component';

const routes: Routes = [
  {
    path: '',
    component: CertifiedFormsComponent,
    children: [
      {
        path: 'pacto-de-socios',
        component: PactoDeSociosComponent,
      },
      {
        path: 'contrato-arras-penitenciales',
        component: ContratoArrasPenitencialesComponent
      },
      {
        path: 'contrato-compraventa-vehiculo',
        component: ContratoCompraventaVehiculoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertifiedFormsRoutingModule { }
