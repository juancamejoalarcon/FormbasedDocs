import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertifiedFormsComponent } from './certified-forms.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: ':id',
    component: CertifiedFormsComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertifiedFormsRoutingModule { }
