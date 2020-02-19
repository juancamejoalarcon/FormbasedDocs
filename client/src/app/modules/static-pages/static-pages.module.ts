import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { 
  GuideComponent,
  CgvComponent,
  CondicionesUsoComponent,
  SilviaProfileComponent,
  PrivacyComponent
} from './components';

@NgModule({
  declarations: [
    GuideComponent,
    CgvComponent,
    CondicionesUsoComponent,
    SilviaProfileComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    SharedModule
  ]
})
export class StaticPagesModule { }
