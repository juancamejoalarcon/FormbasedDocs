import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';

import { CertifiedFormsRoutingModule } from './certified-forms-routing.module';
import { CertifiedFormsComponent } from './certified-forms.component';
import {
  PactoDeSociosComponent,
  ContratoArrasPenitencialesComponent,
  StepModelService,
  DocumentCreatorService,
  ContratoCompraventaVehiculoComponent
} from './forms';
import {
  CheckoutComponent,
  SharedService,
  DocCreatorService,
  StepsService,
  ITextComponent,
  IDateComponent,
  INumberComponent,
  IForEachComponent,
  IRadioBComponent,
  IRadioCComponent,
  ISelectComponent,
  ICheckboxComponent
} from './shared';


@NgModule({
  declarations: [
    CertifiedFormsComponent,
    PactoDeSociosComponent,
    CheckoutComponent,
    ContratoArrasPenitencialesComponent,
    ContratoCompraventaVehiculoComponent,
    ITextComponent,
    IDateComponent,
    INumberComponent,
    IForEachComponent,
    IRadioBComponent,
    IRadioCComponent,
    ISelectComponent,
    ICheckboxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CertifiedFormsRoutingModule
  ],
  providers: [
    SharedService,
    StepModelService,
    DocumentCreatorService,
    DocCreatorService,
    StepsService
  ]
})
export class CertifiedFormsModule { }
