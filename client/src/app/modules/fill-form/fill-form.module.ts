import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';

import { FillFormRoutingModule } from './fill-form-routing.module';
import { FillFormComponent } from './fill-form.component';
import { FillFormResolver } from './fill-form-resolver.service';

@NgModule({
  declarations: [FillFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FillFormRoutingModule
  ],
  providers: [
    FillFormResolver
  ]
})
export class FillFormModule { }
