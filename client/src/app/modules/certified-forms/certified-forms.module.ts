import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';

import { CertifiedFormsRoutingModule } from './certified-forms-routing.module';
import { CertifiedFormsComponent } from './certified-forms.component';
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
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    CertifiedFormsComponent,
    CheckoutComponent,
    ITextComponent,
    IDateComponent,
    INumberComponent,
    IForEachComponent,
    IRadioBComponent,
    IRadioCComponent,
    ISelectComponent,
    ICheckboxComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CertifiedFormsRoutingModule
  ],
  providers: [
    SharedService,
    DocCreatorService,
    StepsService
  ]
})
export class CertifiedFormsModule { }
