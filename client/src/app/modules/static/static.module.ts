import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';

import { StaticPagesRoutingModule } from './static-routing.module';
import {
  GuideComponent,
  CgvComponent,
  CondicionesUsoComponent,
  SilviaProfileComponent,
  PrivacyComponent,
  ContactComponent
} from './components';
import { ContratoCompraventaVehiculoComponent, ModelosResolver } from './modelos'

@NgModule({
  declarations: [
    GuideComponent,
    CgvComponent,
    CondicionesUsoComponent,
    SilviaProfileComponent,
    PrivacyComponent,
    ContactComponent,
    ContratoCompraventaVehiculoComponent
  ],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    SharedModule
  ],
  providers: [ModelosResolver]
})
export class StaticPagesModule { }
