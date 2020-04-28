import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormComponent } from './create-form.component';
import { CreateFormResolver } from './create-form-resolver.service';
import { AuthGuard, AuthResolver } from '../../core';

const routes: Routes = [
  {
    path: '',
    component: CreateFormComponent,
    resolve: {
      initedInServer: AuthResolver
    }
  },
  // {
  //   path: 'edit',
  //   component: CreateFormComponent,
  //   resolve: [AuthResolver]
  // },
  {
    path: 'edit/:slug',
    component: CreateFormComponent,
  resolve: {
    initedInServer: AuthResolver,
    form: CreateFormResolver
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFormRoutingModule { }
