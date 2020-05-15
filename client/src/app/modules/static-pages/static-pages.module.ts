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
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    GuideComponent,
    CgvComponent,
    CondicionesUsoComponent,
    SilviaProfileComponent,
    PrivacyComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    SharedModule
  ]
})
export class StaticPagesModule { }
