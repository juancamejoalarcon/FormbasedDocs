import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { 
  GuideComponent,
  CgvComponent,
  CondicionesUsoComponent,
  SilviaProfileComponent 
} from './components';

@NgModule({
  declarations: [
    GuideComponent,
    CgvComponent,
    CondicionesUsoComponent,
    SilviaProfileComponent],
  imports: [
    CommonModule,
    StaticPagesRoutingModule
  ]
})
export class StaticPagesModule { }
