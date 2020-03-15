import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';

import { CreateFormRoutingModule } from './create-form-routing.module';
import { CreateFormComponent } from './create-form.component';
import { CreateFormResolver } from './create-form-resolver.service';
import { QuillModule } from 'ngx-quill';
import { InputTextGuideComponent } from './inputs-guide-components/input-text-guide/input-text-guide.component';
import { InputRadioAGuideComponent } from './inputs-guide-components/input-radio-a-guide/input-radio-a-guide.component';
import { InputRadioBGuideComponent } from './inputs-guide-components/input-radio-b-guide/input-radio-b-guide.component';
import { SubMenuComponent } from './components';


@NgModule({
  declarations: [CreateFormComponent, InputTextGuideComponent, InputRadioAGuideComponent, InputRadioBGuideComponent, SubMenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreateFormRoutingModule,
    QuillModule.forRoot()
  ],
  providers: [CreateFormResolver]
})
export class CreateFormModule { }
