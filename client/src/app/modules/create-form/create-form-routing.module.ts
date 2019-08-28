import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormComponent } from './create-form.component';
import { CreateFormResolver } from './create-form-resolver.service';
import { AuthGuard } from '../../core';

const routes: Routes = [
  {
    path: '',
    component: CreateFormComponent,
  },
  {
    path: 'edit',
    component: CreateFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:slug',
    component: CreateFormComponent,
    canActivate: [AuthGuard],
  resolve: {
    form: CreateFormResolver
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFormRoutingModule { }
