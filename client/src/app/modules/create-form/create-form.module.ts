import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';

import { CreateFormRoutingModule } from './create-form-routing.module';
import { CreateFormComponent } from './create-form.component';
import { CreateFormResolver } from './create-form-resolver.service';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [CreateFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreateFormRoutingModule,
    QuillModule.forRoot()
  ],
  providers: [CreateFormResolver]
})
export class CreateFormModule { }
