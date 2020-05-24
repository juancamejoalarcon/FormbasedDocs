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
  ContactComponent,
  ModelosComponent,
  ModelosResolver
} from './components';

@NgModule({
  declarations: [
    GuideComponent,
    CgvComponent,
    CondicionesUsoComponent,
    SilviaProfileComponent,
    PrivacyComponent,
    ContactComponent,
    ModelosComponent
  ],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    SharedModule
  ],
  providers: [ModelosResolver]
})
export class StaticPagesModule { }
