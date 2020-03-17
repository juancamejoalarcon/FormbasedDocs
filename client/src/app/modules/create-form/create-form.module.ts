import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';

import { CreateFormRoutingModule } from './create-form-routing.module';
import { CreateFormComponent } from './create-form.component';
import { CreateFormResolver } from './create-form-resolver.service';
import { QuillModule } from 'ngx-quill';
import {
  SubMenuComponent,
  FieldsAreaTopComponent,
  FieldsAreaMiddleComponent,
  FieldsAreaBottomComponent,
  AddQuestionMenuComponent,
  InputTextGuideComponent,
  InputRadioAGuideComponent,
  InputRadioBGuideComponent
} from './components';


@NgModule({
  declarations: [
    CreateFormComponent,
    InputTextGuideComponent,
    InputRadioAGuideComponent,
    InputRadioBGuideComponent,
    SubMenuComponent,
    FieldsAreaTopComponent,
    FieldsAreaMiddleComponent,
    FieldsAreaBottomComponent,
    AddQuestionMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CreateFormRoutingModule,
    QuillModule.forRoot()
  ],
  providers: [CreateFormResolver]
})
export class CreateFormModule { }
