import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';

import { CertifiedFormsRoutingModule } from './certified-forms-routing.module';
import { CertifiedFormsComponent } from './certified-forms.component';
import {
  PactoDeSociosComponent,
  ContratoArrasPenitencialesComponent,
  StepModelService } from './forms';
import { CheckoutComponent, SharedService } from './shared';

@NgModule({
  declarations: [
    CertifiedFormsComponent,
    PactoDeSociosComponent,
    CheckoutComponent,
    ContratoArrasPenitencialesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CertifiedFormsRoutingModule
  ],
  providers: [
    SharedService,
    StepModelService
  ]
})
export class CertifiedFormsModule { }
