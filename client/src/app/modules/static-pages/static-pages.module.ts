import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { GuideComponent, CgvComponent } from './components';

@NgModule({
  declarations: [GuideComponent, CgvComponent],
  imports: [
    CommonModule,
    StaticPagesRoutingModule
  ]
})
export class StaticPagesModule { }
